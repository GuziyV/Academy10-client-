import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightdetailComponent } from './flightdetail.component';

describe('FlightdetailComponent', () => {
  let component: FlightdetailComponent;
  let fixture: ComponentFixture<FlightdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
