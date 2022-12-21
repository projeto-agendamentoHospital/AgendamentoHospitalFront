import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingSettingsComponent } from './components/listing-settings/listing-settings.component';
import { ApresentationListingSettingsComponent } from './components/apresentation-listing-settings/apresentation-listing-settings.component';
import { UpdateSettingsComponent } from './components/update-settings/update-settings.component';
import { DeleteSettingsConfirmComponent } from './components/delete-settings-confirm/delete-settings-confirm.component';
import { WhichDeleteSettingComponent } from './components/which-delete-setting/which-delete-setting.component';
import { CreateSettingComponent } from './components/create-setting/create-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingSettingsComponent,
    ApresentationListingSettingsComponent,
    UpdateSettingsComponent,
    DeleteSettingsConfirmComponent,
    WhichDeleteSettingComponent,
    CreateSettingComponent
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
