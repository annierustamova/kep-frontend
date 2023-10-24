import { Component, OnInit } from '@angular/core';
import { ChallengesRating } from '../../../models/challenges.models';
import { ChallengesStatisticsService } from '../../../services';
import { AuthenticationService } from 'app/auth/service';
import { BaseComponent } from '@shared/components/classes/base.component';
import { User } from 'app/auth/models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'section-profile',
  templateUrl: './section-profile.component.html',
  styleUrls: ['./section-profile.component.scss']
})
export class SectionProfileComponent extends BaseComponent implements OnInit {

  constructor(
    public statisticsService: ChallengesStatisticsService,
    public authService: AuthenticationService,
  ) {
    super();
  }

  public challengesRating: ChallengesRating;

  protected readonly Math = Math;

  ngOnInit(): void {
    super.ngOnInit();
  }

  afterChangeCurrentUser(currentUser: User) {
    if (currentUser) {
      this.statisticsService.getUserChallengesRating(this.currentUser?.username).subscribe(
        (challengesRating: ChallengesRating) => {
          challengesRating.all = (challengesRating.wins + challengesRating.draws + challengesRating.losses) || 1;
          this.challengesRating = challengesRating;
        }
      );
    }
  }

}
