import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSettingComponent } from './components/ScheduleSettingsFront/create-setting/create-setting.component';
import { ListingSettingsComponent } from './components/ScheduleSettingsFront/listing-settings/listing-settings.component';
import { UpdateSettingsComponent } from './components/ScheduleSettingsFront/update-settings/update-settings.component';
import { WhichDeleteSettingComponent } from './components/ScheduleSettingsFront/which-delete-setting/which-delete-setting.component';

const routes: Routes = [
  // {path: 'ScheduleSetting', comp
  { path: 'ScheduleSettings', component: ListingSettingsComponent },
  { path: 'WhichDeleteSetting', component: WhichDeleteSettingComponent },
  { path: 'CreateSetting', component: CreateSettingComponent },
  { path: 'UpdateSettings', component: UpdateSettingsComponent },
  { path: '**', redirectTo: '/ScheduleSettings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
