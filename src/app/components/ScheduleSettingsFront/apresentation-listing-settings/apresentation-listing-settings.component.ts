import { Component } from '@angular/core';

@Component({
  selector: 'app-apresentation-listing-settings',
  templateUrl: './apresentation-listing-settings.component.html',
  styleUrls: ['./apresentation-listing-settings.component.css']
})
export class ApresentationListingSettingsComponent {
    titleApresentation: string = "Agendamentos";
    descriptionApresentation: string = "Consulte, Leia, Atualize e Exclua informações de agendamentos de consultas"
}
