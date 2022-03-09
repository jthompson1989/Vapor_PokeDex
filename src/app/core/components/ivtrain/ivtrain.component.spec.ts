import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVTrainComponent } from './ivtrain.component';

describe('IVTrainComponent', () => {
  let component: IVTrainComponent;
  let fixture: ComponentFixture<IVTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IVTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IVTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
