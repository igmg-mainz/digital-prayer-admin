import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrayerComponent } from './prayer/prayer.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementFlyerComponent } from './announcement-flyer/announcement-flyer.component';
import { AnnouncementTextComponent } from './announcement-text/announcement-text.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'prayer', component: PrayerComponent },
  { path: 'flyer', component: AnnouncementFlyerComponent },
  { path: 'text', component: AnnouncementTextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
