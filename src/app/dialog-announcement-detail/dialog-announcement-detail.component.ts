import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Announcement } from '../shared/model/announcement';
import { AnnouncementService } from '../shared/service/announcement.service';

@Component({
  selector: 'cr-dialog-announcement-detail',
  templateUrl: './dialog-announcement-detail.component.html',
  styleUrls: ['./dialog-announcement-detail.component.css']
})
export class DialogAnnouncementDetailComponent implements OnInit {
  data: string;

  constructor(public dialogRef: MatDialogRef<DialogAnnouncementDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public announcement: Announcement,
              private announcementService: AnnouncementService) {
  }

  ngOnInit() {
    if (this.announcement.image !== null && this.announcement.image !== undefined) {
      this.announcementService.downloadImage(this.announcement.image.name).subscribe(
        response => this.data = response,
        error => console.log(error)
      );
    }
  }

  getTitle() {
    return this.announcement.text !== null && this.announcement.text !== undefined
      ? this.announcement.text.title
      : this.announcement.image.name;
  }

  getContentOfText() {
    return this.announcement.text !== null && this.announcement.text !== undefined ? this.announcement.text.content : null;
  }

  getBegin() {
    return this.announcement.scheduler.begin;
  }


  getEnd() {
    return this.announcement.scheduler.end;
  }

  getRepetation() {
    return this.announcement.scheduler.fixedRate;
  }

}
