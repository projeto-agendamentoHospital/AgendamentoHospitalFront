import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IHospitalDTO } from './interfaces/IHospitalDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  private apiURL = 'https://localhost:7114/CadastrarHospital';

  constructor(private http: HttpClient) { }

  registerHospital(hospital: any){
    return this.http.post(this.apiURL, hospital);
  }


  getAll(): Observable<IHospitalDTO[]> {
    return this.http.get<IHospitalDTO[]>("https://localhost:7114/ListarTodos");
  }

  updateSetting(hospital: any){
    return this.http.put(this.apiURL, hospital)
  }

}
