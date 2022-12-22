import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IScheduleProfessionalRegistrationDto } from 'src/app/interfaces/IScheduleProfessionalRegistrationDto';
import { ScheduleProfessionalService } from 'src/app/schedule-professional.service';

@Component({
  selector: 'app-listing-professional',
  templateUrl: './listing-professional.component.html',
  styleUrls: ['./listing-professional.component.css']
})
export class ListingProfessionalComponent {
  listScheduleProfessional: IScheduleProfessionalRegistrationDto[] = [];
  
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
   constructor(private http: HttpClient, private scheduleProfessionalService: ScheduleProfessionalService) {
    this.toList();
    this.getProfessional();
  }

  // removeSetting(setting: IScheduleSettingsDTO){
  //   console.log("Configuração removida.");
  //   this.setting = this.listScheduleSettings.remove(this.listScheduleSettings, setting);
  // }

  toList() {
    this.http.get('https://localhost:7114/ScheduleProfessionalRegistration').subscribe((data) => { console.log(`Chamada da API retornou: ${JSON.stringify(data)}`) });
    // var fullDate = JSON.stringify(d);
  }
  
  getProfessional(): void {
    this.scheduleProfessionalService.getAll().subscribe((professional) => (this.listScheduleProfessional = professional));
  }
}