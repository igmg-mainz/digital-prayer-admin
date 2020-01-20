import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule, MatPaginatorModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrayerComponent } from './prayer/prayer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogCreateAnnouncementComponent } from './dialog-create-announcement/dialog-create-announcement.component';
import { AnnouncementFlyerComponent } from './announcement-flyer/announcement-flyer.component';
import { AnnouncementTextComponent } from './announcement-text/announcement-text.component';
import { DialogAnnouncementDetailComponent } from './dialog-announcement-detail/dialog-announcement-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrayerComponent,
    HeaderComponent,
    AnnouncementsComponent,
    FooterComponent,
    SidebarComponent,
    DialogCreateAnnouncementComponent,
    AnnouncementFlyerComponent,
    AnnouncementTextComponent,
    DialogAnnouncementDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [DialogCreateAnnouncementComponent, DialogAnnouncementDetailComponent]
})
export class AppModule {
}
