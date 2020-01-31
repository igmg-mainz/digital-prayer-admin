import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Announcement} from '../shared/model/announcement';

@Component({
  selector: 'cr-dialog-delete-announcement',
  templateUrl: './dialog-delete-announcement.component.html',
  styleUrls: ['./dialog-delete-announcement.component.css']
})
export class DialogDeleteAnnouncementComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleteAnnouncementComponent>,
              @Inject(MAT_DIALOG_DATA) public announcement: Announcement) {
  }

  public title;

  ngOnInit() {
    this.title = this.announcement.text !== undefined ? this.announcement.text.title : this.announcement.image.name;
  }

}
