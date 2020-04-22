import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrolmentEntryComponent } from './user-enrolment-entry.component';

describe('UserEnrolmentEntryComponent', () => {
  let component: UserEnrolmentEntryComponent;
  let fixture: ComponentFixture<UserEnrolmentEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnrolmentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnrolmentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
