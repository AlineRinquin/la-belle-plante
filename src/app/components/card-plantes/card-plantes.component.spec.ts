import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlantesComponent } from './card-plantes.component';

describe('CardPlantesComponent', () => {
  let component: CardPlantesComponent;
  let fixture: ComponentFixture<CardPlantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPlantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
