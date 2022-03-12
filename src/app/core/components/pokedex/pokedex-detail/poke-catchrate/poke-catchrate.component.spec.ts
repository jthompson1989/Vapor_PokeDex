import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCatchrateComponent } from './poke-catchrate.component';

describe('PokeCatchrateComponent', () => {
  let component: PokeCatchrateComponent;
  let fixture: ComponentFixture<PokeCatchrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCatchrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCatchrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
