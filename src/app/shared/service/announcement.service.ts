import { Injectable } from '@angular/core';
import { Announcement } from '../model/announcement';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const baseUri = 'https://h2861894.stratoserver.net/services/DigitalPrayerServer/announcements';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  addImage(file: FormData): Observable<HttpResponse<void>> {
    const httpOptions = this.authService.getBasicWithHeader();
    const uri = baseUri + '/image';
    return this.http.post<HttpResponse<void>>(uri, file, httpOptions);
  }

  downloadImage(name: string) {
    const httpOptions = this.authService.getBasicWithHeaderWithoutObserve();
    const uri = `${baseUri}/image/${name}`;
    return this.http.get(uri, httpOptions)
      .pipe(
        switchMap(response => {
          return this.readFile(response);
        })
      );
  }

  addNewAnnouncement(announcement: Announcement): Observable<HttpResponse<void>> {
    const httpOptions = this.authService.getBasicWithHeader();
    return this.http.post<HttpResponse<void>>(baseUri, announcement, httpOptions);
  }

  getAllAnnouncements(): Observable<HttpResponse<Announcement[]>> {
    const httpOptions = this.authService.getBasicWithHeader();
    return this.http.get<HttpResponse<Announcement[]>>(baseUri, httpOptions);
  }

  deleteAnnouncement(announcement: Announcement): Observable<HttpResponse<void>> {
    const httpOptions = this.authService.getBasicWithHeader();
    const uri = `${baseUri}/${announcement.announcementId}`;
    return this.http.delete<HttpResponse<void>>(uri, httpOptions);
  }

  private readFile(blob: Blob): Observable<string> {
    return Observable.create(obs => {
      const reader = new FileReader();

      reader.onerror = err => obs.error(err);
      reader.onabort = err => obs.error(err);
      reader.onload = () => obs.next(reader.result);
      reader.onloadend = () => obs.complete();

      return reader.readAsDataURL(blob);
    });
  }
}
