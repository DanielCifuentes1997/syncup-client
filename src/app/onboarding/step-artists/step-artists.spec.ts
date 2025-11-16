import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepArtists } from './step-artists';

describe('StepArtists', () => {
  let component: StepArtists;
  let fixture: ComponentFixture<StepArtists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepArtists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepArtists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
