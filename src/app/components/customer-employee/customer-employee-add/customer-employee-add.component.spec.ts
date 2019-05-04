import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEmployeeAddComponent } from './customer-employee-add.component';

describe('CustomerEmployeeAddComponent', () => {
  let component: CustomerEmployeeAddComponent;
  let fixture: ComponentFixture<CustomerEmployeeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEmployeeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEmployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
