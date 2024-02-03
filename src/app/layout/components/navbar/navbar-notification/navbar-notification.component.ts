import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { bounceAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { User } from '@auth';
import { AuthService } from '@auth';

import { NotificationsService } from 'app/layout/components/navbar/navbar-notification/notifications.service';
import { WebsocketService } from 'app/shared/services/websocket';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageResult } from '@app/common/classes/page-result';
import Swal from 'sweetalert2';
import { CoreCommonModule } from '@core/common.module';
import { KepPaginationComponent } from '@shared/components/kep-pagination/kep-pagination.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { KepIconComponent } from '@shared/components/kep-icon/kep-icon.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbar } from 'ngx-scrollbar';

interface Notification {
  id: number;
  type: number;
  message: string;
  createdNaturaltime: string;
  created: string;
  content: any;
}

@Component({
  selector: 'app-navbar-notification',
  templateUrl: './navbar-notification.component.html',
  animations: [
    bounceAnimation({ delay: 100, duration: 1000 }),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ],
  standalone: true,
  imports: [
    CoreCommonModule,
    KepPaginationComponent,
    SpinnerComponent,
    KepIconComponent,
    NgbDropdownModule,
    NgScrollbar,
  ]
})
export class NavbarNotificationComponent implements OnInit, OnDestroy {

  public animationState = false;

  public notifications: Array<Notification> = [];
  public pageNumber = 1;
  public total: number;
  public pagesCount = 0;

  public currentUser: User;
  public isAll = false;

  @ViewChild('notificationAudio') notificationAudio: any;

  private _intervalId: any;
  private _unsubscribeAll = new Subject();

  constructor(
    public notificationsService: NotificationsService,
    public wsService: WebsocketService,
    public authService: AuthService,
  ) {}

  ngOnInit(): void {
    this._intervalId = setInterval(() => {
      this.animationState = !this.animationState;
    }, 10000);
    this.updateNotifications();
    this.wsService.status.pipe(takeUntil(this._unsubscribeAll)).subscribe(
      () => {
        this.authService.currentUser.pipe(takeUntil(this._unsubscribeAll)).subscribe(
          (user: User) => {
            if (user) {
              this.wsService.send('notification-add', user.username);
              this.wsService.on(`notification-${ user.username }`).subscribe(
                (notification: Notification) => {
                  if (notification.type === 1) {
                    Swal.fire({
                      title: 'Information',
                      html: notification.message,
                      icon: 'info',
                    });
                  }
                  const notifications = this.notifications.reverse();
                  notifications.push(notification);
                  this.notifications = notifications.reverse();
                  this.notificationAudio.nativeElement.play();
                }
              );
            } else {
              this.wsService.send('notification-delete', this.currentUser.username);
            }
            this.currentUser = user;
          }
        );
      }
    );
  }

  updateNotifications() {
    this.notificationsService.getNotifications(this.pageNumber, this.isAll).subscribe(
      (result: PageResult<Notification>) => {
        this.notifications = result.data;
        this.pageNumber = result.page;
        this.total = result.total;
        this.pagesCount = result.pagesCount;
        setTimeout(() => this.animationState = true, 500);
      }
    );
  }

  notificationClick(notification: Notification) {
    if (!this.isAll) {
      this.notificationsService.readNotification(notification.id).subscribe(
        (result: any) => {
          if (result.success) {
            const index = this.notifications.findIndex((value: Notification) => value.id === notification.id);
            if (index !== -1) {
              this.notifications.splice(index, 1);
            }
          }
        }
      );
    }
  }

  readAll() {
    this.notificationsService.readAllNotification().subscribe(
      (result: any) => {
        if (result.success) {
          this.notifications.splice(0, this.notifications.length);
        }
      }
    );
  }

  click() {
    this.isAll = !this.isAll;
    this.notifications = [];
    this.updateNotifications();
  }

  ngOnDestroy(): void {
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
