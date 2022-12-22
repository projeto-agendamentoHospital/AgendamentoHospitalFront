import { ISpecialtyDTO } from 'src/app/interfaces/ISpecialtyDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  private apiURL = 'https://localhost:7114/CreateSpecialty';

  constructor(private http: HttpClient) { }

  registerSpecialty(specialty: any){
    return this.http.post(this.apiURL, specialty);
  }


  getAll(): Observable<ISpecialtyDTO[]> {
    return this.http.get<ISpecialtyDTO[]>("https://localhost:7114/GetList");
  }


  updateSpecialty(specialty: any){
    return this.http.patch("https://localhost:7114/UpdateSpecialty", specialty);


  }

  removeSpecialista(id: number){
    const URL = `https://localhost:7114/DeleteSpecialty/${id}`;
    return this.http.delete(URL);
  }

}
