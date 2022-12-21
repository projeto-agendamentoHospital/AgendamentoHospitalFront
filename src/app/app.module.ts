import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingSettingsComponent } from './components/ScheduleSettingsFront/listing-settings/listing-settings.component';
import { ApresentationListingSettingsComponent } from './components/ScheduleSettingsFront/apresentation-listing-settings/apresentation-listing-settings.component';
import { UpdateSettingsComponent } from './components/ScheduleSettingsFront/update-settings/update-settings.component';
import { WhichDeleteSettingComponent } from './components/ScheduleSettingsFront/which-delete-setting/which-delete-setting.component';
import { CreateSettingComponent } from './components/ScheduleSettingsFront/create-setting/create-setting.component';
import { CreateHospitalComponent } from './components/Hospital/create-hospital/create-hospital.component';
import { DeleteHospitalComponent } from './components/Hospital/delete-hospital/delete-hospital.component';
import { ScheduleFooterComponent } from './components/ScheduleSettingsFront/schedule-footer/schedule-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingSettingsComponent,
    ApresentationListingSettingsComponent,
    UpdateSettingsComponent,
    WhichDeleteSettingComponent,
    CreateSettingComponent,
    CreateHospitalComponent,
    ScheduleFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
