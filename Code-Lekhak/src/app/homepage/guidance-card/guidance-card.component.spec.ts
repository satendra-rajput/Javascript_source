import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceCardComponent } from './guidance-card.component';

describe('GuidanceCardComponent', () => {
  let component: GuidanceCardComponent;
  let fixture: ComponentFixture<GuidanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidanceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
