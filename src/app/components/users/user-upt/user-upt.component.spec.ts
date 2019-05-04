import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUptComponent } from './user-upt.component';

describe('UserUptComponent', () => {
  let component: UserUptComponent;
  let fixture: ComponentFixture<UserUptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
