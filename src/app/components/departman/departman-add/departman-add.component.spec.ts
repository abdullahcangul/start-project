import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmanAddComponent } from './departman-add.component';

describe('DepartmanAddComponent', () => {
  let component: DepartmanAddComponent;
  let fixture: ComponentFixture<DepartmanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
