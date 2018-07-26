import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetypedetailComponent } from './planetypedetail.component';

describe('PlanetypedetailComponent', () => {
  let component: PlanetypedetailComponent;
  let fixture: ComponentFixture<PlanetypedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetypedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetypedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
