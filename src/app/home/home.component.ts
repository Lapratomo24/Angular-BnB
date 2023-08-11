import { Component, OnInit, inject } from '@angular/core';
import { Location } from '../location';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  homeLocationList: Location[] = [];
  homeService: HomeService = inject(HomeService);
  filtering: Location[] = [];

  // constructor() {
  //   this.homeLocationList = this.HomeService.getAllLocations();
  //   this.filtering = this.homeLocationList;
  // };

  constructor() {
    this.homeService.getAllHousingLocations().then((housingLocationList: Location[]) => {
      this.homeLocationList = housingLocationList;
      this.filtering = housingLocationList;
    });
  }

  ngOnInit(): void {

  }

  filtered(text: string) {
    if (!text) {
      this.filtering = this.homeLocationList;
    }

    this.filtering = this.homeLocationList.filter(
      location => location?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
