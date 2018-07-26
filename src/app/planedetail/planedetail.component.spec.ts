import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanedetailComponent } from './planedetail.component';

describe('PlanedetailComponent', () => {
  let component: PlanedetailComponent;
  let fixture: ComponentFixture<PlanedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
