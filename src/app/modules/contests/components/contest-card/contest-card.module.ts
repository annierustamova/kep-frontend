import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContestCardBigComponent } from './contest-card-big/contest-card-big.component';
import { ContestCardComponent } from './contest-card/contest-card.component';
import { ContestCardSmallComponent } from './contest-card-small/contest-card-small.component';
import { CorePipesModule } from '../../../../../core/pipes/pipes.module';
import { CoreDirectivesModule } from '../../../../../core/directives/directives';
import { KepcoinSpendSwalModule } from '../../../kepcoin/kepcoin-spend-swal/kepcoin-spend-swal.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ContestCountdownComponent } from './contest-countdown/contest-countdown.component';
import { ContestStandingsCountdownComponent } from './contest-standings-countdown/contest-standings-countdown.component';
import { ContestCardCountdownComponent } from './contest-card-countdown/contest-card-countdown.component';
import { ContestantViewModule } from '@shared/components/contestant-view/contestant-view.module';
import { CountdownComponent } from '@shared/third-part-modules/countdown/countdown.component';

@NgModule({
  declarations: [
    ContestCardBigComponent,
    ContestCardComponent,
    ContestCardSmallComponent,
    ContestCountdownComponent,
    ContestStandingsCountdownComponent,
    ContestCardCountdownComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    CorePipesModule,
    CoreDirectivesModule,
    KepcoinSpendSwalModule,
    NgbTooltipModule,
    ContestantViewModule,
    CountdownComponent
  ],
  exports: [
    ContestCardBigComponent,
    ContestCardComponent,
    ContestCardSmallComponent,
    ContestCountdownComponent,
    ContestStandingsCountdownComponent,
    ContestCardCountdownComponent,
  ]
})
export class ContestCardModule {
}
