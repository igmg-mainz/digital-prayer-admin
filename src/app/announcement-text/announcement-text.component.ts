import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnnouncementService } from '../shared/service/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-announcement-text',
  templateUrl: './announcement-text.component.html',
  styleUrls: ['./announcement-text.component.css']
})
export class AnnouncementTextComponent implements OnInit {

  public textForm: FormGroup;

  constructor(private announcementService: AnnouncementService,
              private router: Router) { }

  ngOnInit() {
    this.textForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      begin: new FormControl(),
      end: new FormControl(),
      rate: new FormControl()
    });
  }

  addAnnouncement() {

    const text = this.textForm.value;
    const announcement = {
      text: {title: text.title, content: text.content},
      scheduler: {begin: new Date(text.begin), end: new Date(text.end), fixedRate: text.rate}
    };

    this.announcementService.addNewAnnouncement(announcement)
      .subscribe(response => {
        console.log(JSON.stringify(response));
        this.router.navigateByUrl('');
      });

  }
}
