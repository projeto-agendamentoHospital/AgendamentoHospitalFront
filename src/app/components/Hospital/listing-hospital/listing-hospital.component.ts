import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHospitalDTO } from 'src/app/interfaces/IHospitalDTO';
import { HospitalService } from 'src/app/hospital.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-hospital',
  templateUrl: './listing-hospital.component.html',
  styleUrls: ['./listing-hospital.component.css']
})
export class ListingHospitalComponent {

   listHospital: IHospitalDTO[] = [];

  constructor(private http: HttpClient, private getAllHospitalService: HospitalService,  private router: Router) {
    this.toList();
    this.getAllHospital();
  }

  toList() {
    this.listHospital = [];

    this.http
      .get('https://localhost:7114/ListarTodos')
      .pipe(
        map((response: any) => {
          return Object.values(response);
        })
      )
      .subscribe((data) => {
        for (let index = 0; index < data.length; index++) {
          let dataJson: any = data[index];
          this.listHospital.push(dataJson as IHospitalDTO);
        }

      });
  }

   getAllHospital(): void {
    this.getAllHospitalService.getAll().subscribe((hospital) => (this.listHospital = hospital));
  }

  delete(id: number) {
    this.http.delete(`https://localhost:7144/Delete?id=${id}`)
      .subscribe((data) => {
        console.log(`Linhas executadas no método de remover do banco ${JSON.stringify(data)}`);
        this.toList();
      });
  }

  edit(id: number) {
    this.router.navigate([`editarAluno/${id}`]);
  }

}
