import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CountdownComponent } from '@shared/third-part-modules/countdown/countdown.component';
import { ContestStatus } from '@contests/constants/contest-status';
import { Contest } from '@contests/models/contest';

@Component({
  selector: 'contest-standings-countdown',
  templateUrl: './contest-standings-countdown.component.html',
  styleUrls: ['./contest-standings-countdown.component.scss'],
  standalone: true,
  imports: [CoreCommonModule, CountdownComponent]
})
export class ContestStandingsCountdownComponent implements OnInit {

  @Input() contest: Contest;
  @ViewChild('finishModal') public finishModalRef: TemplateRef<any>;
  @ViewChild('startModal') public startModalRef: TemplateRef<any>;

  public leftTime = 0;

  constructor(
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {  
    let time = this.contest.status == ContestStatus.ALREADY ? this.contest.finishTime : this.contest.startTime;
    this.leftTime = (new Date(time).valueOf() - Date.now());
  }

  finish(){
    if(this.contest.status == ContestStatus.NOT_STARTED){
      this.contest.status = ContestStatus.ALREADY;
      this.modalService.open(this.startModalRef);        
    } else if(this.contest.status == ContestStatus.ALREADY){
      this.contest.status = ContestStatus.FINISHED;
      this.modalService.open(this.finishModalRef);        
    }
  }

}
