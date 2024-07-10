import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCardComponent } from './career-card.component';

describe('CareerCardComponent', () => {
  let component: CareerCardComponent;
  let fixture: ComponentFixture<CareerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
