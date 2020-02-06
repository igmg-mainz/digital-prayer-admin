import { Injectable } from '@angular/core';

// const baseUri = 'https://h2861894.stratoserver.net/services/DigitalPrayerServer/announcements';
const baseUri = 'http://localhost:8092/announcements';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }

  announcements() {
    return baseUri;
  }

  announcementImage() {
    return `${baseUri}/image`;
  }

  announcementImageByName(name: string) {
    return `${baseUri}/image/${name}`;
  }

  announcement(announcementId: string) {
    return `${baseUri}/${announcementId}`;
  }
}
