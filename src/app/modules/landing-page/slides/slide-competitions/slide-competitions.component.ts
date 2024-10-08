import { Component, Input, OnInit } from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';
import { CoreConfig } from '@core/types';
import { fadeInLeftAnimation, fadeInRightAnimation, fadeInUpAnimation } from 'angular-animations';
import { CoreCommonModule } from '@core/common.module';

@Component({
  selector: 'slide-competitions',
  templateUrl: './slide-competitions.component.html',
  styleUrls: ['./slide-competitions.component.scss'],
  animations: [
    fadeInLeftAnimation({ duration: 1000 }),
    fadeInRightAnimation({ duration: 1000 }),
    fadeInUpAnimation({ duration: 1000 }),
  ],
  standalone: true,
  imports: [
    CoreCommonModule
  ]
})
export class SlideCompetitionsComponent implements OnInit {

  @Input() animationState: boolean;

  public isDarkSkin = false;

  constructor(public coreConfigService: CoreConfigService) { }

  ngOnInit(): void {
    this.coreConfigService.getConfig().subscribe(
      (coreConfig: CoreConfig) => {
        this.isDarkSkin = coreConfig.layout.skin == 'dark';
      }
    );
  }
}
