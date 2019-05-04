import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmanUptdateComponent } from './departman-uptdate.component';

describe('DepartmanUptdateComponent', () => {
  let component: DepartmanUptdateComponent;
  let fixture: ComponentFixture<DepartmanUptdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmanUptdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmanUptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
