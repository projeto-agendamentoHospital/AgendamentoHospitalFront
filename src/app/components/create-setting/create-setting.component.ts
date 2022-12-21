import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleSettingsService } from 'src/app/schedule-settings.service';

@Component({
  selector: 'app-create-setting',
  templateUrl: './create-setting.component.html',
  styleUrls: ['./create-setting.component.css']
})
export class CreateSettingComponent {
  constructor(private http: HttpClient, private createSettingService: ScheduleSettingsService, private router: Router) { }

  toCreate(idConfig: number, idHospital: number, idSpecialty: number, idProfessional: number, startDateHour: Date, finalDateHour: Date) {
    console.log(`Adicionando registro com as seguintes informações: 
                IdConfig: ${idConfig},
                IdHospital: ${idHospital},
                `)
  }
}
