import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketeamListComponent } from './poketeam-list.component';

describe('PoketeamListComponent', () => {
  let component: PoketeamListComponent;
  let fixture: ComponentFixture<PoketeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoketeamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoketeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
