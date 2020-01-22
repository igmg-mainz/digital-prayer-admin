import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AnnouncementService } from '../shared/service/announcement.service';

@Component({
  selector: 'cr-announcement-flyer',
  templateUrl: './announcement-flyer.component.html',
  styleUrls: ['./announcement-flyer.component.css']
})
export class AnnouncementFlyerComponent implements OnInit {

  public flyerForm: FormGroup;
  public fileToUpload: any;
  public formData: FormData;

  constructor(private dateProvider: DatePipe,
              private router: Router,
              private announcementService: AnnouncementService) {
  }

  ngOnInit() {
    this.flyerForm = new FormGroup({
      begin: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      repetition: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

  }

  addAnnouncement(value: any) {
    const flyer = this.flyerForm.value;
    this.formData = new FormData();
    this.formData.append('file', this.fileToUpload);

    const formattedBegin = this.dateProvider.transform(flyer.begin, 'yyyy-MM-dd');
    const formattedEnd = this.dateProvider.transform(flyer.end, 'yyyy-MM-dd');

    const announcement = {
      image: { name: this.fileToUpload.name },
      scheduler: { begin: new Date(formattedBegin), end: new Date(formattedEnd), fixedRate: flyer.repetition }
    };

    this.announcementService.addImage(this.formData).subscribe(response => {
      if (response.status === 201) {
        this.announcementService.addNewAnnouncement(announcement).subscribe(resp => {
          if (resp.status === 201) {
            this.router.navigateByUrl('');
          }
        });
      }
    });
  }

  cancelImage() {
    this.fileToUpload = null;
  }
}
