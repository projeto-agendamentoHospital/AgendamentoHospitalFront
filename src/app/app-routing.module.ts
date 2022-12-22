import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSettingComponent } from './components/ScheduleSettingsFront/create-setting/create-setting.component';
import { ListingSettingsComponent } from './components/ScheduleSettingsFront/listing-settings/listing-settings.component';
import { UpdateSettingsComponent } from './components/ScheduleSettingsFront/update-settings/update-settings.component';
import { WhichDeleteSettingComponent } from './components/ScheduleSettingsFront/which-delete-setting/which-delete-setting.component';
import { CreateHospitalComponent } from './components/Hospital/create-hospital/create-hospital.component';
import { CreateSpecialtyComponent } from './components/Specialty/create-specialty/create-specialty.component';
import { UpdateSpecialtyComponent } from './components/Specialty/update-specialty/update-specialty.component';
import { ListingAllSpecialtyComponent } from './components/Specialty/listing-all-specialty/listing-all-specialty.component';
import { DeleteSpecialtyComponent } from './components/Specialty/delete-specialty/delete-specialty.component';

const routes: Routes = [
  // {path: 'ScheduleSetting', comp
  { path: 'ScheduleSettings', component: ListingSettingsComponent },
  { path: 'WhichDeleteSetting', component: WhichDeleteSettingComponent },
  { path: 'CreateSetting', component: CreateSettingComponent },
  { path: 'UpdateSettings', component: UpdateSettingsComponent },
  { path: 'CreateHospital', component: CreateHospitalComponent },
  { path: "CreateSpecialty", component: CreateSpecialtyComponent },
  { path: "UpdateSpecialty", component: UpdateSpecialtyComponent },
  { path: "ListingSpecialty", component: ListingAllSpecialtyComponent },
  { path: "DeleteSpecialty", component: DeleteSpecialtyComponent },
  { path: '**', redirectTo: '/ScheduleSettings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
