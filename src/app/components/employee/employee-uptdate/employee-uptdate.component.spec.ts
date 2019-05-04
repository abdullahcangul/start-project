import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUptdateComponent } from './employee-uptdate.component';

describe('EmployeeUptdateComponent', () => {
  let component: EmployeeUptdateComponent;
  let fixture: ComponentFixture<EmployeeUptdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeUptdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
