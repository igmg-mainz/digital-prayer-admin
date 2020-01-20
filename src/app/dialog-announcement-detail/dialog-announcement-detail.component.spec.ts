import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnnouncementDetailComponent } from './dialog-announcement-detail.component';

describe('DialogAnnouncementDetailComponent', () => {
  let component: DialogAnnouncementDetailComponent;
  let fixture: ComponentFixture<DialogAnnouncementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAnnouncementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnnouncementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
