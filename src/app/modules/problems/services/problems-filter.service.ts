import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AttemptLangs } from '../enums';
import { LocalStorageService } from 'app/shared/storages/local-storage.service';
import { SessionStorageService } from 'app/shared/storages/session-storage.service';
import { ProblemsFilter } from '../models/problems.models';

const KEY = 'problems-filter';
const DEFAULT_FILTER: ProblemsFilter = {
  title: null,
  tags: null,
  difficulty: null,
  status: null,
  topic: null,
  ordering: 'id',
}

@Injectable({
  providedIn: 'root'
})
export class ProblemsFilterService {

  constructor(public sessionStorageService: SessionStorageService){}

  private _currentFilter = this.sessionStorageService.get(KEY) || DEFAULT_FILTER;
  private _filter = new BehaviorSubject<ProblemsFilter>(this._currentFilter);

  getFilter(){
    return this._filter;
  }

  updateFilter(filter: Partial<ProblemsFilter>){
    this._currentFilter = {
      ...this._currentFilter,
      ...filter,
    }
    this._filter.next(this._currentFilter);
    this.sessionStorageService.set(KEY, this._currentFilter);
  }

}