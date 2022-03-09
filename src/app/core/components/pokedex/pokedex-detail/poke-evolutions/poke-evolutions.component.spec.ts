import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeEvolutionsComponent } from './poke-evolutions.component';

describe('PokeEvolutionsComponent', () => {
  let component: PokeEvolutionsComponent;
  let fixture: ComponentFixture<PokeEvolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeEvolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeEvolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
