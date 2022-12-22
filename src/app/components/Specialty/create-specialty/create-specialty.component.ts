import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecialtyService } from 'src/app/specialty.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-specialty',
  templateUrl: './create-specialty.component.html',
  styleUrls: ['./create-specialty.component.css']
})
export class CreateSpecialtyComponent  {
  listSpecialty: Array<any> = [];
  specialty:any;

  constructor(private http: HttpClient, private createSpecialtyService: SpecialtyService, private router: Router) { }

  ngOnInit() {
    this.specialty = {};
  }


  toCreate(frm: NgForm) {
    console.log(`Adicionando registro com as seguintes informações:
    frm: ${frm.value}
    `);
    this.createSpecialtyService.registerSpecialty(this.specialty).subscribe(response => {
      this.listSpecialty.push(response);
      frm.reset();
      alert("Configuração cadastrada com sucesso!✅");
    });
  }
}

