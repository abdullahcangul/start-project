import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleUptdateComponent } from './title-uptdate.component';

describe('TitleUptdateComponent', () => {
  let component: TitleUptdateComponent;
  let fixture: ComponentFixture<TitleUptdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleUptdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleUptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
