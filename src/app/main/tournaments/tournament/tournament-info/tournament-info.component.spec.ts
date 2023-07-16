import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInfoComponent } from './tournament-info.component';

describe('TournamentInfoComponent', () => {
  let component: TournamentInfoComponent;
  let fixture: ComponentFixture<TournamentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
