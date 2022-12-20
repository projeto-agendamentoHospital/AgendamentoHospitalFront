import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListingSettingsComponent } from './listing-settings/listing-settings.component';

const routes: Routes = [
  // {path: 'ScheduleSetting', comp
  {path: 'ScheduleSettings', component: ListingSettingsComponent },
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
