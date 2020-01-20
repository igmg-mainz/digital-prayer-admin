import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementFlyerComponent } from './announcement-flyer.component';

describe('AnnouncementFlyerComponent', () => {
  let component: AnnouncementFlyerComponent;
  let fixture: ComponentFixture<AnnouncementFlyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementFlyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
