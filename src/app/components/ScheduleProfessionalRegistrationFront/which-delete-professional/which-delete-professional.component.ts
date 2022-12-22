import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleProfessionalService } from 'src/app/schedule-professional.service';

@Component({
  selector: 'app-which-delete-professional',
  templateUrl: './which-delete-professional.component.html',
  styleUrls: ['./which-delete-professional.component.css']
})
export class WhichDeleteProfessionalComponent {
  public idProfessional: number = 1;

  constructor(private http: HttpClient, private deleteProfessionalService: ScheduleProfessionalService, private router: Router) { }
  // ngOnInit() {
  //   this.deleteProfessional = {};
  // }

  async toDelete(id: number) {
    console.log('excluindo...' + id);
    await this.deleteProfessionalService.removeProfessional(id).subscribe();
    alert(`Ação finalizada. Profissional de ID ${id} não consta mais em nosso sistema.`)
    console.log(`ID Professional, de número ${id}, deletado com sucesso.`);
    this.router.navigate(['/ScheduleProfessional']);
  }
}
