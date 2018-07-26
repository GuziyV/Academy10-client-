import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessdetailComponent } from './stewardessdetail.component';

describe('StewardessdetailComponent', () => {
  let component: StewardessdetailComponent;
  let fixture: ComponentFixture<StewardessdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
