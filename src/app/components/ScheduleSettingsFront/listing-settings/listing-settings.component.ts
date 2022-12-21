import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IScheduleSettingsDTO } from 'src/app/interfaces/IScheduleSettingsDTO';
import { ScheduleSettingsService } from 'src/app/schedule-settings.service';

@Component({
  selector: 'app-listing-settings',
  templateUrl: './listing-settings.component.html',
  styleUrls: ['./listing-settings.component.css']
})
export class ListingSettingsComponent {
  listScheduleSettings: IScheduleSettingsDTO[] = [];
  
  /* 
  setting: IScheduleSettingsDTO = {
    idConfig: 99,
      idHospital: 1,
      idSpecialty : 1,
      idProfessional: 2,
      startDateHour: new Date('2012-02-21T18:10:00'),
      finalDateHour: new Date('2012-01-01T00:00:00')
    }
    */
   constructor(private http: HttpClient, private scheduleSettingsService: ScheduleSettingsService) {
    this.toList();
    this.getSettings();
  }

  // removeSetting(setting: IScheduleSettingsDTO){
  //   console.log("Configuração removida.");
  //   this.setting = this.listScheduleSettings.remove(this.listScheduleSettings, setting);
  // }

  toList() {
    this.http.get('https://localhost:7114/ScheduleSetting').subscribe((data) => { console.log(`Chamada da API retornou: ${JSON.stringify(data)}`) });
    // var fullDate = JSON.stringify(d);
  }
  
  getSettings(): void {
    this.scheduleSettingsService.getAll().subscribe((settings) => (this.listScheduleSettings = settings));
  }
}