import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotdetailComponent } from './pilotdetail.component';

describe('PilotdetailComponent', () => {
  let component: PilotdetailComponent;
  let fixture: ComponentFixture<PilotdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
