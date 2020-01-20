import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateAnnouncementComponent } from './dialog-create-announcement.component';

describe('DialogCreateAnnouncementComponent', () => {
  let component: DialogCreateAnnouncementComponent;
  let fixture: ComponentFixture<DialogCreateAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
