import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSettingComponent } from './components/ScheduleSettingsFront/create-setting/create-setting.component';
import { ListingSettingsComponent } from './components/ScheduleSettingsFront/listing-settings/listing-settings.component';
import { UpdateSettingsComponent } from './components/ScheduleSettingsFront/update-settings/update-settings.component';
import { WhichDeleteSettingComponent } from './components/ScheduleSettingsFront/which-delete-setting/which-delete-setting.component';
import { CreateHospitalComponent } from './components/Hospital/create-hospital/create-hospital.component';
import { CreateProfessionalComponent } from './components/ScheduleProfessionalRegistrationFront/create-professional/create-professional.component';
import { ListingProfessionalComponent } from './components/ScheduleProfessionalRegistrationFront/listing-professional/listing-professional.component';
import { UpdateProfessionalComponent } from './components/ScheduleProfessionalRegistrationFront/update-professional/update-professional.component';
import { WhichDeleteProfessionalComponent } from './components/ScheduleProfessionalRegistrationFront/which-delete-professional/which-delete-professional.component';


const routes: Routes = [
  // {path: 'ScheduleSetting', comp
  { path: 'ScheduleSettings', component: ListingSettingsComponent },
  { path: 'WhichDeleteSetting', component: WhichDeleteSettingComponent },
  { path: 'CreateSetting', component: CreateSettingComponent },
  { path: 'UpdateSettings', component: UpdateSettingsComponent },
  { path: 'CreateHospital', component: CreateHospitalComponent },
  { path: 'CreateProfessional', component: CreateProfessionalComponent },
  { path: 'ListingProfessional', component: ListingProfessionalComponent },
  { path: 'UpdateProfessional', component: UpdateProfessionalComponent },
  { path: 'WhichDeleteProfessional', component: WhichDeleteProfessionalComponent },
  { path: '**', redirectTo: '/ScheduleSettings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
