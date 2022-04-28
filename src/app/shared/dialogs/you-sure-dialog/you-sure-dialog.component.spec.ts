import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouSureDialogComponent } from './you-sure-dialog.component';

describe('YouSureDialogComponent', () => {
  let component: YouSureDialogComponent;
  let fixture: ComponentFixture<YouSureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouSureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouSureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
