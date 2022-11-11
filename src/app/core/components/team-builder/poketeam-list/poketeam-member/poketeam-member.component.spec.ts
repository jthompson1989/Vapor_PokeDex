import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketeamMemberComponent } from './poketeam-member.component';

describe('PoketeamMemberComponent', () => {
  let component: PoketeamMemberComponent;
  let fixture: ComponentFixture<PoketeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoketeamMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoketeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
