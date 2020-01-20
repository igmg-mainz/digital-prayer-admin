import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementTextComponent } from './announcement-text.component';

describe('AnnouncementTextComponent', () => {
  let component: AnnouncementTextComponent;
  let fixture: ComponentFixture<AnnouncementTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
