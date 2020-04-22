import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrolmentConfirmComponent } from './user-enrolment-confirm.component';

describe('UserEnrolmentConfirmComponent', () => {
  let component: UserEnrolmentConfirmComponent;
  let fixture: ComponentFixture<UserEnrolmentConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnrolmentConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnrolmentConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
