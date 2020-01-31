import {Component, OnInit, ViewChild} from '@angular/core';
import {Announcement} from '../shared/model/announcement';
import {AnnouncementService} from '../shared/service/announcement.service';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {DialogCreateAnnouncementComponent} from '../dialog-create-announcement/dialog-create-announcement.component';
import {Router} from '@angular/router';
import {DialogAnnouncementDetailComponent} from '../dialog-announcement-detail/dialog-announcement-detail.component';
import {DialogDeleteAnnouncementComponent} from '../dialog-delete-announcement/dialog-delete-announcement.component';


@Component({
  selector: 'cr-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  displayedColumns: string[] = ['created', 'type', 'identifier', 'begin', 'end', 'rate', 'button'];

  announcements: Announcement[] = [];
  dataSource: MatTableDataSource<Announcement>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private announcementService: AnnouncementService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.announcementService.getAllAnnouncements()
      .subscribe(response => {
        this.announcements = response.body;
        this.dataSource = new MatTableDataSource<Announcement>(this.announcements);
        this.dataSource.paginator = this.paginator;
      });
  }

  getType(announcement: Announcement) {
    return announcement.image !== undefined && announcement.image !== null ? 'Flyer' : 'Text';
  }

  getIdentifier(announcement: Announcement) {
    return announcement.image !== undefined && announcement.image !== null ? announcement.image.name : announcement.text.title;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateAnnouncementComponent, {
      width: '250px',
      data: {name: 'ramazan'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
    });
  }

  delete(announcement: Announcement) {

    const dialogRef = this.dialog.open(DialogDeleteAnnouncementComponent, {
      width: '600px',
      height: '400px',
      data: announcement
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.announcementService.deleteAnnouncement(announcement)
          .subscribe(response => {
            console.log(JSON.stringify(response));
            if (response.status === 204) {
              this.router.navigateByUrl('');
            }
          });
      }
    });
  }

  openAnnouncementDetailDialog(announcement: Announcement) {

    const dialogRef = this.dialog.open(DialogAnnouncementDetailComponent, {
      width: '1250px',
      height: '800px',
      data: announcement
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
