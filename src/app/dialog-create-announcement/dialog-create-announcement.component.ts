import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'cr-dialog-create-announcement',
  templateUrl: './dialog-create-announcement.component.html',
  styleUrls: ['./dialog-create-announcement.component.css']
})
export class DialogCreateAnnouncementComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogCreateAnnouncementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
