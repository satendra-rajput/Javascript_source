import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfileComponent } from './dashboard-profile.component';

describe('DashboardProfileComponent', () => {
  let component: DashboardProfileComponent;
  let fixture: ComponentFixture<DashboardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
