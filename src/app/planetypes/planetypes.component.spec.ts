import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetypesComponent } from './planetypes.component';

describe('PlanetypesComponent', () => {
  let component: PlanetypesComponent;
  let fixture: ComponentFixture<PlanetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
