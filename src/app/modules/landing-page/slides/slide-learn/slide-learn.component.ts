import { Component, Input, OnInit } from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';
import { CoreConfig } from '@core/types';
import { fadeInLeftAnimation, fadeInRightAnimation, fadeInUpAnimation } from 'angular-animations';
import { CoreCommonModule } from '@core/common.module';

@Component({
  selector: 'slide-learn',
  templateUrl: './slide-learn.component.html',
  styleUrls: ['./slide-learn.component.scss'],
  animations: [
    fadeInUpAnimation({ duration: 1000 }),
    fadeInLeftAnimation({ duration: 1000 }),
    fadeInRightAnimation({ duration: 1000 }),
  ],
  standalone: true,
  imports: [
    CoreCommonModule,
  ]
})
export class SlideLearnComponent implements OnInit {

  @Input() animationState: boolean;

  public isDarkSkin = false;

  constructor(public coreConfigService: CoreConfigService) {}

  ngOnInit(): void {
    this.coreConfigService.getConfig().subscribe(
      (coreConfig: CoreConfig) => {
        this.isDarkSkin = coreConfig.layout.skin == 'dark';
      }
    );
  }

}
