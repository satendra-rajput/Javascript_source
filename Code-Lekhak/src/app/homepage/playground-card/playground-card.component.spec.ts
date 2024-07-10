import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundCardComponent } from './playground-card.component';

describe('PlaygroundCardComponent', () => {
  let component: PlaygroundCardComponent;
  let fixture: ComponentFixture<PlaygroundCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaygroundCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygroundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
