import { HomeService } from './../home.service';
import { HomeLocationComponent } from './../home-location/home-location.component';
import { Component, OnInit, inject } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  homeLocationList: Location[] = [];
  HomeService: HomeService = inject(HomeService);

  constructor() {
    this.homeLocationList = this.HomeService.getAllLocations();
  };

  ngOnInit(): void {

  }
}
