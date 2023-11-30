import { Component, OnInit } from '@angular/core';
import { ProblemsFilter, Tag } from '@problems/models/problems.models';
import { ProblemsService } from '@problems/services/problems.service';
import { ProblemsFilterService } from 'app/modules/problems/services/problems-filter.service';
import { BaseComponent } from '@shared/components/classes/base.component';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { equalsCheck } from '@shared/utils';
import { CoreCommonModule } from '@core/common.module';
import { NgSelectModule } from '@shared/third-part-modules/ng-select/ng-select.module';
import { ProblemsPipesModule } from '@problems/pipes/problems-pipes.module';

interface Difficulty {
  name: string;
  value: number;
}

@Component({
  selector: 'section-problems-filter',
  templateUrl: './section-problems-filter.component.html',
  styleUrls: ['./section-problems-filter.component.scss'],
  standalone: true,
  imports: [
    CoreCommonModule,
    NgSelectModule,
    ProblemsPipesModule,
  ]
})
export class SectionProblemsFilterComponent extends BaseComponent implements OnInit {

  public filterForm = new FormGroup({
    title: new FormControl(),
    tags: new FormControl(),
    difficulty: new FormControl(),
    status: new FormControl(),
    hasChecker: new FormControl(),
    hasCheckInput: new FormControl(),
    hasSolution: new FormControl(),
    partialSolvable: new FormControl(),
  });

  public tags: Array<Tag> = [];
  public difficulties: Array<Difficulty> = [];

  public filterCollapsed = false;

  constructor(
    public service: ProblemsService,
    public problemsFilterService: ProblemsFilterService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(
      (filterValue: ProblemsFilter) => {
        this.problemsFilterService.updateFilter(filterValue);
        this.problemsFilterService.updateFilter({ page: 1 });
      }
    );

    this.service.getTags().subscribe(
      (tags: any) => {
        this.tags = tags;
      }
    );

    this.service.getDifficulties().subscribe(
      (difficulties: any) => {
        this.difficulties = difficulties;
      }
    );
  }

  afterChangeQueryParams(params) {
    this.problemsFilterService.setFilter(params);
    this.filterForm.patchValue(this.problemsFilterService.currentFilterValue, { emitEvent: false });
  }

  compareEqual(a, b) {
    return equalsCheck(a, b) || a?.toString() === b?.toString();
  }

}
