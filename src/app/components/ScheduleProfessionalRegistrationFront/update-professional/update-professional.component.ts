import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleProfessionalService } from 'src/app/schedule-professional.service';

@Component({
  selector: 'app-update-professional',
  templateUrl: './update-professional.component.html',
  styleUrls: ['./update-professional.component.css']
})
export class UpdateProfessionalComponent {
  listProfessional: Array<any> = [];
  Professional: any;

  constructor(private http: HttpClient, private updateProfessionalService: ScheduleProfessionalService, private router: Router) { }

  ngOnInit() {
    this.Professional = {};
  }

  toUpdate(frm: NgForm) {
    console.log(`Atualizando registro ...: 
    frm: ${frm.value}
    `);
    this.updateProfessionalService.updateProfessional(this.Professional).subscribe(response => {
      this.listProfessional.push(response);
      frm.reset();
      this.router.navigate(['/ScheduleSettings']);
      alert("Profissional atualizado(a) com sucesso!✅");
    });
  }
}
