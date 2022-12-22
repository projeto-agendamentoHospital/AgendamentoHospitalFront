import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IScheduleSettingsDTO } from 'src/app/interfaces/IScheduleSettingsDTO';
import { ScheduleSettingsService } from 'src/app/schedule-settings.service';

@Component({
  selector: 'app-query-setting',
  templateUrl: './query-setting.component.html',
  styleUrls: ['./query-setting.component.css']
})
export class QuerySettingComponent implements OnInit {
  public idConfig!: number;
  private apiURL = 'https://localhost:7114/ScheduleSetting';
  listSettings: Array<any> = [];
  setting: Array<any> = [];

  // @Input() oneSetting !: IScheduleSettingsDTO;

  constructor(private http: HttpClient, private getScheduleSettingService: ScheduleSettingsService, private router: Router, private elementRef: ElementRef) { }
  listScheduleSettings: IScheduleSettingsDTO[] = [];
  ngOnInit() {
    this.setting = [];
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.table-settings').addEventListener('click', this.onClick.bind(this))
  }

  onClick(event: any) {
    console.log('Clicou! ' + event)
  }

  // getOneSetting(id: number){
  //   console.log(`Localizando registro de número ${id}....`)
  //     this.getScheduleSettingService.getSettingById(id).subscribe();
  // }

  async getOneSetting(id: number): Promise<Observable<IScheduleSettingsDTO>> {
    // this.http.get(`${this.apiURL}/Query/${id}`).subscribe(response => {
    //   console.log('aqui36257: ' + response);
    // },
    //   error => {
    //     if (error.status === 404) {
    //       console.log(`ID ${id} não localizado.`)
    //     }
    //   }
    // )
    console.log(`Localizando ID ${id}...`)
    // await this.http.get<IScheduleSettingsDTO[]>(this.apiURL + '/Query/' + id).subscribe((settings) => (this.listScheduleSettings = settings));
    await this.http.get<IScheduleSettingsDTO[]>(this.apiURL + '/Query/' + id).subscribe((settings) => {
      console.log(`Chamada da API retornou: ${JSON.stringify(settings)}`);
      let item = JSON.stringify(settings);
      this.listScheduleSettings = settings;
      // this.listScheduleSettings.push(item.idConfig)
      console.log(this.listScheduleSettings)
    });
    return this.http.get<IScheduleSettingsDTO>(this.apiURL + '/' + id)
      .pipe(retry(2), catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Erro ocoreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, mensagem ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
