import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IScheduleProfessionalRegistrationDto } from './interfaces/IScheduleProfessionalRegistrationDto';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ScheduleProfessionalService {
  private apiURL = 'https://localhost:7114/ScheduleProfessionalRegistration';

  constructor(private http: HttpClient) { }

  // remove(settings: IScheduleProfessionalRegistrationDto[], setting: IScheduleProfessionalRegistrationDto){
  //   return settings.filter((s)=> setting.idConfig !== s.idConfig);
  // }

  getAll(): Observable<IScheduleProfessionalRegistrationDto[]> { // observa se ocorre da maneira correta
    return this.http.get<IScheduleProfessionalRegistrationDto[]>(this.apiURL);
  }

  // toList() {
  //   return this.http.get<any[]>(`${this.scheduleSettingsURL}`);
  // }

  getProfessional(id: number){
    return this.http.get(this.apiURL + `/GetProfessionalRegistrationById/${id}`)
  }

  removeProfessional(id: number){
    const URL = `${this.apiURL}`+`/DeleteProfessionalRegistration/${id}`;
    return this.http.delete(URL);
  }

  // createSetting(idConfig: number, idHospital: number, idSpecialty: number, idProfessional: number, startDateHour: Date, finalDateHour: Date){
  //   return this.http.post(this.apiURL, { idConfig, idHospital, idSpecialty,idProfessional, startDateHour, finalDateHour })
  // }

  createProfessional(professional: any){
    return this.http.post(`${this.apiURL}/CreateProfessionalRegistration`, professional);
  }

  updateProfessional(professional: any){
    return this.http.put(this.apiURL + `/UpdateProfessionalRegistration/`, professional)
  }
}
