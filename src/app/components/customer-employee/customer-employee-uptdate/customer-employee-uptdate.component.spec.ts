import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEmployeeUptdateComponent } from './customer-employee-uptdate.component';

describe('CustomerEmployeeUptdateComponent', () => {
  let component: CustomerEmployeeUptdateComponent;
  let fixture: ComponentFixture<CustomerEmployeeUptdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEmployeeUptdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEmployeeUptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
