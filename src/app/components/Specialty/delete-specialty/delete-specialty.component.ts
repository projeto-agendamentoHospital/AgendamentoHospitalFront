import { SpecialtyService } from 'src/app/specialty.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISpecialtyDTO } from 'src/app/interfaces/ISpecialtyDTO';
import { map } from 'rxjs';



@Component({
  selector: 'app-delete-specialty',
  templateUrl: './delete-specialty.component.html',
  styleUrls: ['./delete-specialty.component.css']
})
export class DeleteSpecialtyComponent {
  public idEspecialidade: number = 1;
  // listingAllSpecialty: ISpecialtyDTO[] = [];

  constructor(private http: HttpClient, private deleteSpecialtyService: SpecialtyService, private router: Router) {
    // this.toList();
  }
  // toList() {
  //   this.listingAllSpecialty = [];

  //   this.http.get('https://localhost:7114/GetList').pipe(
  //     map((response: any) => {
  //       return Object.values(response);
  //     })
  //   ).subscribe((data) => {
  //     for (let index = 0; index < data.length; index++) {
  //       let dataJson: any = data[index];
  //       this.listingAllSpecialty.push(dataJson as ISpecialtyDTO);
  //     }
  //     console.log(this.listingAllSpecialty)

  //   });
  // }

  // delete(id: number) {
  //   this.http.delete(`https://localhost:7114/DeleteSpecialty/id=${id}`)
  //     .subscribe((data) => {
  //       console.log(`Linhas executadas no método de remover do banco ${JSON.stringify(data)}`);
  //       this.toList();
  //     });
  // }

  async toDelete(id: number) {
    console.log('excluindo...' + id);
    await this.deleteSpecialtyService.removeSpecialista(id).subscribe();
    alert(`Ação finalizada. Configuração de ID ${id} não consta mais em nosso sistema.`)
    console.log(`ID Config, de número ${id}, deletado com sucesso.`);
    this.router.navigate(['/ListingSpecialty']);
  }
}
