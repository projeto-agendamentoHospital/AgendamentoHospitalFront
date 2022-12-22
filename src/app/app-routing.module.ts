import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSettingComponent } from './components/ScheduleSettingsFront/create-setting/create-setting.component';
import { ListingSettingsComponent } from './components/ScheduleSettingsFront/listing-settings/listing-settings.component';
import { UpdateSettingsComponent } from './components/ScheduleSettingsFront/update-settings/update-settings.component';
import { WhichDeleteSettingComponent } from './components/ScheduleSettingsFront/which-delete-setting/which-delete-setting.component';
import { CreateHospitalComponent } from './components/Hospital/create-hospital/create-hospital.component';
import { ListingHospitalComponent } from './components/Hospital/listing-hospital/listing-hospital.component';


const routes: Routes = [
  // {path: 'ScheduleSetting', comp
  { path: 'ScheduleSettings', component: ListingSettingsComponent },
  { path: 'WhichDeleteSetting', component: WhichDeleteSettingComponent },
  { path: 'CreateSetting', component: CreateSettingComponent },
  { path: 'UpdateSettings', component: UpdateSettingsComponent },
  { path: 'CreateHospital', component: CreateHospitalComponent },
  {path: 'GetAllHospital', component: ListingHospitalComponent},
  { path: '**', redirectTo: '/ScheduleSettings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
