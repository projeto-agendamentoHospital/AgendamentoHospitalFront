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
import { ListingHospitalComponent } from './components/Hospital/listing-hospital/listing-hospital.component';
import { UpdateHospitalComponent } from './components/Hospital/update-hospital/update-hospital.component';
import { ScheduleFooterComponent } from './components/ScheduleSettingsFront/schedule-footer/schedule-footer.component';
import { CreateSpecialtyComponent } from './components/Specialty/create-specialty/create-specialty.component';
import { ListingAllSpecialtyComponent } from './components/Specialty/listing-all-specialty/listing-all-specialty.component';
import { UpdateSpecialtyComponent } from './components/Specialty/update-specialty/update-specialty.component';
import { DeleteSpecialtyComponent } from './components/Specialty/delete-specialty/delete-specialty.component';
import { ApresentationSpecialtyComponent } from './components/Specialty/apresentation-specialty/apresentation-specialty.component';
import { CreateScheduleComponent } from './components/Schedule/create-schedule/create-schedule.component';
import { ListingProfessionalComponent } from './components/ScheduleProfessionalRegistrationFront/listing-professional/listing-professional.component';
import { CreateProfessionalComponent } from './components/ScheduleProfessionalRegistrationFront/create-professional/create-professional.component';
import { UpdateProfessionalComponent } from './components/ScheduleProfessionalRegistrationFront/update-professional/update-professional.component';
import { WhichDeleteProfessionalComponent } from './components/ScheduleProfessionalRegistrationFront/which-delete-professional/which-delete-professional.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingSettingsComponent,
    ApresentationListingSettingsComponent,
    UpdateSettingsComponent,
    WhichDeleteSettingComponent,
    CreateSettingComponent,
    CreateHospitalComponent,
    DeleteHospitalComponent,
    ListingHospitalComponent,
    UpdateHospitalComponent,
    ScheduleFooterComponent,
    DeleteHospitalComponent,
    ApresentationSpecialtyComponent,
    CreateSpecialtyComponent,
    ListingAllSpecialtyComponent,
    UpdateSpecialtyComponent,
    DeleteSpecialtyComponent,
    ApresentationSpecialtyComponent,
    CreateScheduleComponent,
    CreateProfessionalComponent,
    ListingProfessionalComponent,
    UpdateProfessionalComponent,
    WhichDeleteProfessionalComponent,

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
