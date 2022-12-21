import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSettingComponent } from './components/create-setting/create-setting.component';
import { DeleteSettingsConfirmComponent } from './components/delete-settings-confirm/delete-settings-confirm.component';
import {ListingSettingsComponent } from './components/listing-settings/listing-settings.component';
import { UpdateSettingsComponent } from './components/update-settings/update-settings.component';
import { WhichDeleteSettingComponent } from './components/which-delete-setting/which-delete-setting.component';

const routes: Routes = [
  // {path: 'ScheduleSetting', comp
  {path: 'ScheduleSettings', component: ListingSettingsComponent },
  {path: 'DeleteSettingsConfirm', component: DeleteSettingsConfirmComponent },
  {path: 'WhichDeleteSetting', component: WhichDeleteSettingComponent },
  {path: 'CreateSetting', component: CreateSettingComponent },
  {path: 'UpdateSettings', component: UpdateSettingsComponent },
  {path: '**', redirectTo: '/ScheduleSettings'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
