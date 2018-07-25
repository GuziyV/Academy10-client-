import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateFlightComponent } from './add-or-update-flight.component';

describe('AddOrUpdateFlightComponent', () => {
  let component: AddOrUpdateFlightComponent;
  let fixture: ComponentFixture<AddOrUpdateFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
