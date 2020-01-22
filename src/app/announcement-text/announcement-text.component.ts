import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnouncementService } from '../shared/service/announcement.service';
import { Router } from '@angular/router';
import { Announcement } from '../shared/model/announcement';

@Component({
  selector: 'cr-announcement-text',
  templateUrl: './announcement-text.component.html',
  styleUrls: ['./announcement-text.component.css']
})
export class AnnouncementTextComponent implements OnInit {

  public textForm: FormGroup;

  constructor(private announcementService: AnnouncementService,
              private router: Router) {

    this.textForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      content: new FormControl('', [Validators.required,
        Validators.minLength(5), Validators.maxLength(120)]),
      begin: new FormControl(''),
      end: new FormControl(''),
      repetition: new FormControl('', Validators.required)
    });


  }

  ngOnInit() {
  }

  addAnnouncement(value: Announcement) {
    console.log(JSON.stringify(value));

    const text = this.textForm.value;
    const announcement = {
      text: { title: text.title, content: text.content },
      scheduler: { begin: new Date(text.begin), end: new Date(text.end), fixedRate: text.repetition }
    };

    this.announcementService.addNewAnnouncement(announcement)
      .subscribe(response => {
        console.log(JSON.stringify(response));
        this.router.navigateByUrl('');
      });

  }
}
