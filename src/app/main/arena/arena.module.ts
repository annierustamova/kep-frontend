import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArenaComponent } from './arena.component';
import { ArenaTournamentComponent } from './arena-tournament/arena-tournament.component';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { TranslateModule } from '@ngx-translate/core';
import { NgbAlertModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ArenaResolver } from './arena.resolver';
import { ArenaListCardComponent } from './arena-list-card/arena-list-card.component';
import { CountdownModule } from '@ciri/ngx-countdown';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ChallengesUserViewModule } from '../elements/challenges-user-view/challenges-user-view.module';
import { UserPopoverModule } from '../elements/user-popover/user-popover.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ArenaPlayerStatisticsComponent } from './arena-player-statistics/arena-player-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: ArenaComponent,
    title: 'Arena.Arena',
  },
  {
    path: 'tournament/:id',
    component: ArenaTournamentComponent,
    resolve: {
      arena: ArenaResolver,
    },
    data: {
      title: 'Arena.Tournament'
    }
  }
];

@NgModule({
  declarations: [
    ArenaComponent,
    ArenaTournamentComponent,
    ArenaListCardComponent,
    ArenaPlayerStatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CorePipesModule,
    CoreDirectivesModule,
    TranslateModule,
    NgbTooltipModule,
    CountdownModule,
    ContentHeaderModule,
    ChallengesUserViewModule,
    NgbAlertModule,
    UserPopoverModule,
    NgbPaginationModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [ArenaResolver]
})
export class ArenaModule { }
