import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUptdateComponent } from './content-uptdate.component';

describe('ContentUptdateComponent', () => {
  let component: ContentUptdateComponent;
  let fixture: ComponentFixture<ContentUptdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentUptdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentUptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
