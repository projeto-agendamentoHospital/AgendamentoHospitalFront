import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleSettingsService } from 'src/app/schedule-settings.service';

@Component({
  selector: 'app-update-settings',
  templateUrl: './update-settings.component.html',
  styleUrls: ['./update-settings.component.css']
})
export class UpdateSettingsComponent {
  listSettings: Array<any> = [];
  setting: any;

  constructor(private http: HttpClient, private updateSettingService: ScheduleSettingsService, private router: Router) { }

  ngOnInit() {
    this.setting = {};
  }

  toUpdate(frm: NgForm) {
    console.log(`Atualizando registro ...: 
    frm: ${frm.value}
    `);
    this.updateSettingService.updateSetting(this.setting).subscribe(response => {
      this.listSettings.push(response);
      frm.reset();
      this.router.navigate(['/ScheduleSettings']);
      alert("Configuração cadastrada com sucesso!✅");
    });
  }
}
