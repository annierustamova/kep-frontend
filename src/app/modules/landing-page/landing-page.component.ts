import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreCommonModule } from '@core/common.module';
import { BaseComponent } from '@shared/components/classes/base.component';
import { SectionFeaturesComponent } from '@app/modules/landing-page/sections/section-features/section-features.component';
import { SectionHeaderComponent } from '@app/modules/landing-page/sections/section-header/section-header.component';
import { NavbarComponent } from '@app/modules/landing-page/navbar/navbar.component';
import { SectionStatisticsComponent } from '@app/modules/landing-page/sections/section-statistics/section-statistics.component';
import { SectionReviewsComponent } from '@app/modules/landing-page/sections/section-reviews/section-reviews.component';
import { SectionFooterComponent } from '@app/modules/landing-page/sections/section-footer/section-footer.component';
import { SectionPracticeComponent } from '@app/modules/landing-page/sections/section-practice/section-practice.component';
import { SectionGetStartedComponent } from '@app/modules/landing-page/sections/section-get-started/section-get-started.component';
import { SectionContactUsComponent } from '@app/modules/landing-page/sections/section-contact-us/section-contact-us.component';
import { SectionFaqComponent } from '@app/modules/landing-page/sections/section-faq/section-faq.component';
import { doScrolling } from '@shared/utils';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [
    CoreCommonModule,
    SectionFeaturesComponent,
    SectionHeaderComponent,
    NavbarComponent,
    SectionStatisticsComponent,
    SectionReviewsComponent,
    SectionFooterComponent,
    SectionPracticeComponent,
    SectionGetStartedComponent,
    SectionContactUsComponent,
    SectionFaqComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent extends BaseComponent implements OnInit {
  ngOnInit() {
    this.coreConfigService.config = {
      layout: {
        menu: {
          hidden: true
        },
        navbar: {
          hidden: true,
        },
        animation: 'none',
        enableLocalStorage: false
      }
    };

    setTimeout(() => {
      // doScrolling(5000, 25000);
    }, 2000);
  }
}
