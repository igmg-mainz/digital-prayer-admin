import { Injectable } from '@angular/core';
import { Announcement } from '../model/announcement';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient,
              private authService: AuthService,
              private apiService: ApiService) {
  }

  addImage(file: FormData): Observable<HttpResponse<void>> {
    const httpOptions = this.authService.getBasicWithHeader();
    const uri =  this.apiService.announcementImage();
    return this.http.post<HttpResponse<void>>(uri, file, httpOptions);
  }

  downloadImage(name: string) {
    const httpOptions = this.authService.getBasicWithHeaderWithoutObserve();
    const uri = this.apiService.announcementImageByName(name);

    return this.http.get(uri, httpOptions)
      .pipe(
        switchMap(response => {
          return this.readFile(response);
        })
      );
  }

  addNewAnnouncement(announcement: Announcement): Observable<HttpResponse<void>> {
    const httpOptions = this.authService.getBasicWithHeader();
    const uri = this.apiService.announcements();
    return this.http.post<HttpResponse<void>>(uri, announcement, httpOptions);
  }

  getAllAnnouncements(): Observable<HttpResponse<Announcement[]>> {
    const httpOptions = this.authService.getBasicWithHeader();
    const uri = this.apiService.announcements();
    return this.http.get<HttpResponse<Announcement[]>>(uri, httpOptions);
  }

  deleteAnnouncement(announcement: Announcement): Observable<HttpResponse<void>> {
    const httpOptions = this.authService.getBasicWithHeader();
    const uri = this.apiService.announcement(announcement.announcementId);
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
