import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesCardComponent } from './quizzes-card.component';

describe('QuizzesCardComponent', () => {
  let component: QuizzesCardComponent;
  let fixture: ComponentFixture<QuizzesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizzesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
