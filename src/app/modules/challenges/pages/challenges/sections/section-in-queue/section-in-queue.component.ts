import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeCallCardComponent } from '@challenges/components/challenge-call-card/challenge-call-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ChallengeCall } from '@challenges/models';
import { ChallengesApiService } from '@challenges/services';
import { interval } from 'rxjs';
import { BaseUserComponent } from '@app/common/classes/base-user.component';
import { takeUntil } from 'rxjs/operators';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'section-in-queue',
  standalone: true,
  imports: [CommonModule, ChallengeCallCardComponent, NgxSkeletonLoaderModule],
  templateUrl: './section-in-queue.component.html',
  styleUrl: './section-in-queue.component.scss',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class SectionInQueueComponent extends BaseUserComponent implements OnInit {

  public challengeCalls: Array<ChallengeCall> = [];
  public challengeCallsSkeletonVisible = true;

  constructor(public service: ChallengesApiService) {
    super();
  }

  ngOnInit() {
    this.updateChallengeCalls();
    interval(5000).pipe(takeUntil(this._unsubscribeAll)).subscribe(
      () => this.updateChallengeCalls()
    );
  }

  updateChallengeCalls() {
    this.service.getChallengeCalls().subscribe(
      (challengeCalls: Array<ChallengeCall>) => {
        for (let i = 0; i < this.challengeCalls.length; i++) {
          if (!challengeCalls.find((value: ChallengeCall) => value.id === this.challengeCalls[i].id)) {
            this.challengeCalls.splice(i, 1);
          }
        }
        for (const challengeCall of challengeCalls) {
          if (!this.challengeCalls.find((value: ChallengeCall) => value.id === challengeCall.id)) {
            this.challengeCalls.push(challengeCall);
          }
        }
        this.challengeCallsSkeletonVisible = false;
      }
    );
  }

  onChallengeCallDelete(challengeCallId: number) {
    for (let i = 0; i < this.challengeCalls.length; i++) {
      if (this.challengeCalls[i].id === challengeCallId) {
        this.challengeCalls.splice(i, 1);
      }
    }
  }

}
