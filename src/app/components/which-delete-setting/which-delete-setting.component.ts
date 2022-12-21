import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleSettingsService } from 'src/app/schedule-settings.service';

@Component({
  selector: 'app-which-delete-setting',
  templateUrl: './which-delete-setting.component.html',
  styleUrls: ['./which-delete-setting.component.css']
})
export class WhichDeleteSettingComponent {
  public idConfig: number = 1;

  constructor(private http: HttpClient, private deleteSettingService: ScheduleSettingsService, private router: Router) { }
  // ngOnInit() {
  //   this.deleteSetting = {};
  // }

  async toDelete(id: number) {
    console.log('excluindo...' + id);
    await this.deleteSettingService.removeSetting(id).subscribe();
    alert(`Ação finalizada. Configuração de ID ${id} não consta mais em nosso sistema.`)
    console.log(`ID Config, de número ${id}, deletado com sucesso.`);
    this.router.navigate(['/ScheduleSettings']);
  }
}
