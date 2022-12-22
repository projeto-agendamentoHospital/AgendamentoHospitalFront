import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IScheduleProfessionalRegistrationDto } from 'src/app/interfaces/IScheduleProfessionalRegistrationDto';

import { ScheduleProfessionalService } from 'src/app/schedule-professional.service';

@Component({
  selector: 'app-create-professional',
  templateUrl: './create-professional.component.html',
  styleUrls: ['./create-professional.component.css']
})
export class CreateProfessionalComponent implements OnInit {
  listProfessional: Array<any> = [];
  professional: any;

  constructor(private http: HttpClient, private createProfessionalService: ScheduleProfessionalService, private router: Router) { }

  ngOnInit() {
    this.professional = {};
  }

  toCreate(frm: NgForm) {
    console.log(`Adicionando registro com as seguintes informações: 
    frm: ${frm.value}
    `);
    this.createProfessionalService.createProfessional(this.professional).subscribe(response => {
      console.log('....' + this.professional);
      this.listProfessional.push(response);
      frm.reset();
      this.router.navigate(['/ScheduleProfessional']);
      alert("Profissional cadastrado(a) com sucesso!✅");
    });
  }
}
