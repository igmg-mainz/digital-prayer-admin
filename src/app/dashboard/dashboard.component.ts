import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../shared/service/announcement.service';
import { Observable } from 'rxjs';
import { Announcement } from '../shared/model/announcement';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'cr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  announcements$: Observable<HttpResponse<Announcement[]>>;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    this.announcements$ = this.announcementService.getAllAnnouncements();
  }


}
