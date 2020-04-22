import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrolmentPreviewComponent } from './user-enrolment-preview.component';

describe('UserEnrolmentPreviewComponent', () => {
  let component: UserEnrolmentPreviewComponent;
  let fixture: ComponentFixture<UserEnrolmentPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnrolmentPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnrolmentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
