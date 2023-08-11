import { Component } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  homeLocation: Location = {
    id: 100,
    name: "Podomoro",
    city: "Bogor",
    state: "West Java",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 4,
    wifi: true,
    laundry: true,
  }

}
