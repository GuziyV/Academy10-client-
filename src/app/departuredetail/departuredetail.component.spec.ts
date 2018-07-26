import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparturedetailComponent } from './departuredetail.component';

describe('DeparturedetailComponent', () => {
  let component: DeparturedetailComponent;
  let fixture: ComponentFixture<DeparturedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparturedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparturedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
