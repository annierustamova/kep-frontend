import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSidebarComponent } from './section-sidebar.component';

describe('SectionSidebarComponent', () => {
  let component: SectionSidebarComponent;
  let fixture: ComponentFixture<SectionSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
