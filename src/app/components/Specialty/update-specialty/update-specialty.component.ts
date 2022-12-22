import { SpecialtyService } from 'src/app/specialty.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleSettingsService } from 'src/app/schedule-settings.service';

@Component({
  selector: 'app-update-specialty',
  templateUrl: './update-specialty.component.html',
  styleUrls: ['./update-specialty.component.css']
})
export class UpdateSpecialtyComponent {
  public idEspecialidade: number = 1;
  listSpecialty: Array<any> = [];
  specialty: any;

  constructor(private http: HttpClient, private UpdateSpecialty: SpecialtyService, private router: Router) { }

  ngOnInit() {
    this.specialty = {};
  }

  toUpdate(frm: NgForm) {
    console.log(`Atualizando registro ...:
    frm: ${frm.value}
    `);
    this.UpdateSpecialty.updateSpecialty(this.specialty).subscribe(response => {
      this.listSpecialty.push(response);
      frm.reset();
      this.router.navigate(['/ListSpecialty']);
      alert("Configuração atualizada com sucesso!✅");
    });
  }
}
