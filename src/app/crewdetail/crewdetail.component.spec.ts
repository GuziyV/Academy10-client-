import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewdetailComponent } from './crewdetail.component';

describe('CrewdetailComponent', () => {
  let component: CrewdetailComponent;
  let fixture: ComponentFixture<CrewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
