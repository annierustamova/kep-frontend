import { Component, OnInit } from '@angular/core';
import { randomInt } from '@shared/utils';
import { CoreCommonModule } from '@core/common.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'problem1630',
  templateUrl: './problem1630.component.html',
  styleUrls: ['./problem1630.component.scss'],
  standalone: true,
  imports: [CoreCommonModule, NgbTooltipModule]
})
export class Problem1630Component implements OnInit {

  public msg = 'A5k12UIc10';

  public top = 0;
  public left = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changePosition() {
    this.top = randomInt(1, 500);
    this.left = randomInt(1, 500);
  }

}
