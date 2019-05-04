import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUptdateComponent } from './customer-uptdate.component';

describe('CustomerUptdateComponent', () => {
  let component: CustomerUptdateComponent;
  let fixture: ComponentFixture<CustomerUptdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUptdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
