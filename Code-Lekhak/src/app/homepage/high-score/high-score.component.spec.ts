import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreComponent } from './high-score.component';

describe('HighScoreComponent', () => {
  let component: HighScoreComponent;
  let fixture: ComponentFixture<HighScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
