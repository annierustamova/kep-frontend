import { Component, OnInit } from '@angular/core';
import { ChallengesStatisticsService } from '@challenges/services';
import { ChallengesRating } from '../../models/challenges.models';
import { BasePageComponent } from '@shared/components/classes/base-page.component';
import { ContentHeader } from '@layout/components/content-header/content-header.component';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from '@layout/components/content-header/content-header.module';
import { SectionProfileComponent } from '@challenges/pages/user-statistics/section-profile/section-profile.component';
import { SectionRatingChangesComponent } from '@challenges/pages/user-statistics/section-rating-changes/section-rating-changes.component';
import { SectionLastChallengesComponent } from '@challenges/pages/user-statistics/section-last-challenges/section-last-challenges.component';

@Component({
  selector: 'app-challenges-profile',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss', '../../challenges.styles.scss'],
  standalone: true,
  imports: [
    CoreCommonModule,
    ContentHeaderModule,
    SectionProfileComponent,
    SectionRatingChangesComponent,
    SectionLastChallengesComponent,
  ]
})
export class UserStatisticsComponent extends BasePageComponent implements OnInit {
  public challengesRating: ChallengesRating;

  constructor(
    public statisticsService: ChallengesStatisticsService,
  ) {
    super();
  }

  ngOnInit() {
    this.loadContentHeader();
  }

  protected getContentHeader(): ContentHeader {
    return {
      headerTitle: 'Statistics',
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Challenges',
            isLink: true,
            link: '..'
          }
        ]
      },
    };
  }
}
