import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessUptdateComponent } from './process-uptdate.component';

describe('ProcessUptdateComponent', () => {
  let component: ProcessUptdateComponent;
  let fixture: ComponentFixture<ProcessUptdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessUptdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessUptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
