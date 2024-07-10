import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLayoutComponent } from './company-layout.component';

describe('CompanyLayoutComponent', () => {
  let component: CompanyLayoutComponent;
  let fixture: ComponentFixture<CompanyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
