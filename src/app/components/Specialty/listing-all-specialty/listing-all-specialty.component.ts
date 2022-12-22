import { Component } from '@angular/core';
import { ISpecialtyDTO } from 'src/app/interfaces/ISpecialtyDTO';

@Component({
  selector: 'app-listing-all-specialty',
  templateUrl: './listing-all-specialty.component.html',
  styleUrls: ['./listing-all-specialty.component.css']
})
export class ListingAllSpecialtyComponent {
  listingAllSpecialty : ISpecialtyDTO[] = [];
}
