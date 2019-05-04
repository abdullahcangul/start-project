import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUptdateComponent } from './project-uptdate.component';

describe('ProjectUptdateComponent', () => {
  let component: ProjectUptdateComponent;
  let fixture: ComponentFixture<ProjectUptdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUptdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
