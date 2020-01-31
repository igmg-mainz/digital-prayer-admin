import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAnnouncementComponent } from './dialog-delete-announcement.component';

describe('DialogDeleteAnnouncementComponent', () => {
  let component: DialogDeleteAnnouncementComponent;
  let fixture: ComponentFixture<DialogDeleteAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
