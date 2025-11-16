import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGenres } from './step-genres';

describe('StepGenres', () => {
  let component: StepGenres;
  let fixture: ComponentFixture<StepGenres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepGenres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepGenres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
