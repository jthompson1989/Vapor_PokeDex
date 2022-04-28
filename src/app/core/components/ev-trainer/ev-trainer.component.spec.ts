import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvTrainerComponent } from './ev-trainer.component';

describe('EvTrainerComponent', () => {
  let component: EvTrainerComponent;
  let fixture: ComponentFixture<EvTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
