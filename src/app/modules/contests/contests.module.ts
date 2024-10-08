import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreDirectivesModule } from '@shared/directives/directives.module';
import { CorePipesModule } from '@shared/pipes/pipes.module';
import { NgbDatepickerModule, NgbDropdownModule, NgbNavModule, NgbPopoverModule, NgbTimepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { NgSelectModule } from '@shared/third-part-modules/ng-select/ng-select.module';

import { AuthGuard } from 'app/auth/helpers';
import { CountUpModule } from 'ngx-countup';
import { ClipboardModule } from '@shared/components/clipboard/clipboard.module';
import { CodeEditorModule } from '@shared/components/code-editor/code-editor.module';
import { UserPopoverModule } from '@shared/components/user-popover/user-popover.module';
import { MathjaxModule } from '@shared/third-part-modules/mathjax/mathjax.module';
import { ContestCreateGuard, ContestGuard } from './contests.guard';
import { ContestProblemResolver, ContestProblemsResolver, ContestResolver, OngoingContestsResolver, UpcomingContestsResolver } from './contests.resolver';
import { ContestAttemptsComponent } from './pages/contest/contest-attempts/contest-attempts.component';
import { ContestOgImageComponent } from './pages/contest/contest-og-image/contest-og-image.component';
import { ContestProblemComponent } from './pages/contest/contest-problem/contest-problem.component';
import { ContestProblemsComponent } from './pages/contest/contest-problems/contest-problems.component';
import { ContestQuestionsComponent } from './pages/contest/contest-questions/contest-questions.component';
import { ContestRatingChangesComponent } from './pages/contest/contest-rating-changes/contest-rating-changes.component';
import { ContestStandingsComponent } from './pages/contest/contest-standings/contest-standings.component';
import { ContestTabComponent } from './pages/contest/contest-tab/contest-tab.component';
import { ContestComponent } from './pages/contest/contest.component';
import { ContestsTabComponent } from './pages/contests/contests-tab/contests-tab.component';
import { ContestsComponent } from './pages/contests/contests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RatingComponent } from './pages/rating/rating.component';
import { ContestsTableModule } from './components/contests-table/contests-table.module';
import { ContestCardModule } from './components/contest-card/contest-card.module';
import { ContestantViewModule } from '@contests/components/contestant-view/contestant-view.module';
import { AttemptsTableModule } from '@problems/components/attempts-table/attempts-table.module';
import { ContestProblemCardComponent } from '@contests/pages/contest/contest-problems/contest-problem-card/contest-problem-card.component';
import { SwiperComponent } from '@shared/third-part-modules/swiper/swiper.component';
import { ProblemInfoCardComponent } from '@problems/components/problem-info-card/problem-info-card.component';
import { MonacoEditorComponent } from '@shared/third-part-modules/monaco-editor/monaco-editor.component';
import { ContestCardComponent } from '@contests/components/contest-card/contest-card/contest-card.component';
import { KepPaginationComponent } from '@shared/components/kep-pagination/kep-pagination.component';
import { KepTableComponent } from '@shared/components/kep-table/kep-table.component';
import { UserContestsComponent } from '@contests/pages/user-contests/user-contests.component';
import { ContestCreateComponent } from '@contests/pages/user-contests/contest-create/contest-create.component';
import { KepcoinSpendSwalModule } from '../kepcoin/kepcoin-spend-swal/kepcoin-spend-swal.module';
import { EmptyResultComponent } from '@shared/components/empty-result/empty-result.component';
import { ContestRegistrantsComponent } from '@contests/pages/contest/contest-registrants/contest-registrants.component';
import { KepIconComponent } from '@shared/components/kep-icon/kep-icon.component';
import { ContestClassesPipe } from '@contests/pipes/contest-classes.pipe';
import { ProblemBodyComponent } from '@problems/components/problem-body/problem-body.component';
import {
  ContestQuestionCardComponent
} from '@contests/pages/contest/contest-questions/contest-question-card/contest-question-card.component';


const routes: Routes = [
  {
    path: '',
    component: ContestsComponent,
    title: 'Contests.Contests'
  },
  {
    path: 'rating',
    component: RatingComponent,
    data: { animation: 'contests-rating' },
    title: 'Contests.ContestsRating',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animation: 'contests-profile' },
    canActivate: [AuthGuard],
    title: 'Contests.ContestsProfile',
  },
  {
    path: 'contest/:id',
    component: ContestComponent,
    data: {
      title: 'Contests.Contest',
    },
    canActivate: [],
    resolve: {
      contest: ContestResolver,
    },
  },
  {
    path: 'contest/:id/problems',
    component: ContestProblemsComponent,
    data: {
      title: 'Contests.ContestProblems',
    },
    canActivate: [ContestGuard],
    resolve: {
      contest: ContestResolver,
      contestProblems: ContestProblemsResolver,
    }
  },
  {
    path: 'contest/:id/questions',
    component: ContestQuestionsComponent,
    data: {
      title: 'Contests.ContestQuestions',
    },
    canActivate: [ContestGuard],
    resolve: {
      contest: ContestResolver,
      contestProblems: ContestProblemsResolver,
    }
  },
  {
    path: 'contest/:id/problem/:symbol',
    component: ContestProblemComponent,
    data: {
      title: 'Contests.ContestProblem',
    },
    canActivate: [ContestGuard],
    resolve: {
      contest: ContestResolver,
      contestProblem: ContestProblemResolver,
    }
  },
  {
    path: 'contest/:id/attempts',
    component: ContestAttemptsComponent,
    data: {
      title: 'Contests.ContestAttempts',
    },
    canActivate: [ContestGuard],
    resolve: {
      contest: ContestResolver,
    }
  },
  {
    path: 'contest/:id/standings',
    component: ContestStandingsComponent,
    data: {
      animation: 'contest-standings',
      title: 'Contests.ContestStandings',
    },
    canActivate: [ContestGuard],
    resolve: {
      contest: ContestResolver,
      contestProblems: ContestProblemsResolver,
    }
  },
  {
    path: 'contest/:id/rating-changes',
    component: ContestRatingChangesComponent,
    data: {
      animation: 'contest-rating-changes',
      title: 'Contests.ContestRatingChanges',
    },
    resolve: {
      contest: ContestResolver,
    },
  },
  {
    path: 'contest/:id/registrants',
    component: ContestRegistrantsComponent,
    data: {
      animation: 'contest-registrants',
      title: 'Contests.ContestRegistrants',
    },
    resolve: {
      contest: ContestResolver,
    },
  },
  {
    path: 'contest/:id/og-image',
    component: ContestOgImageComponent,
    resolve: {
      contest: ContestResolver,
    },
  },
  {
    path: 'user-contests',
    component: UserContestsComponent,
    data: { animation: 'user-contests' },
    title: 'Contests.MyContests',
  },
  {
    path: 'user-contests/create',
    component: ContestCreateComponent,
    data: {
      animation: 'user-contest-create',
    },
    title: 'Contests.CreateContest',
    canActivate: [ContestCreateGuard],
  },
];


@NgModule({
  declarations: [
    ContestComponent,
    RatingComponent,
    ProfileComponent,
    ContestTabComponent,
    ContestsTabComponent,
    ContestOgImageComponent,
    ContestRatingChangesComponent,
    ContestStandingsComponent,
    ContestAttemptsComponent,
    ContestProblemComponent,
    ContestQuestionsComponent,
    ContestProblemsComponent,
    ContestProblemCardComponent,
    UserContestsComponent,
    ContestCreateComponent,
    ContestRegistrantsComponent,
  ],
  imports: [
    ContestsComponent,
    CommonModule,
    RouterModule.forChild(routes),
    CoreDirectivesModule,
    CorePipesModule,
    TranslateModule,
    ContentHeaderModule,
    CorePipesModule,
    NgbNavModule,
    ContestsTableModule,
    ContestCardComponent,
    ContestCardModule,
    ContestantViewModule,
    NgbTooltipModule,
    FormsModule,
    NgSelectModule,
    NgbDropdownModule,
    MathjaxModule,
    ClipboardModule,
    CodeEditorModule,
    MonacoEditorComponent,
    MathjaxModule,
    UserPopoverModule,
    CountUpModule,
    NgbPopoverModule,
    ProblemBodyComponent,
    KepcoinSpendSwalModule,
    AttemptsTableModule,
    KepPaginationComponent,
    SwiperComponent,
    ProblemInfoCardComponent,
    KepTableComponent,
    NgbTimepickerModule,
    NgbDatepickerModule,
    EmptyResultComponent,
    KepIconComponent,
    ContestClassesPipe,
    ContestQuestionCardComponent,
  ],
  providers: [
    ContestGuard,
    ContestProblemResolver,
    ContestProblemsResolver,
    ContestResolver,
    OngoingContestsResolver,
    UpcomingContestsResolver
  ]
})
export class ContestsModule {
}
