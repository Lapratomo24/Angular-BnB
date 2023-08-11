import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { Location } from '../location';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);

  homeService = inject(HomeService);

  homeLocation: Location | undefined;

  constructor() {
    const homeLocationId = Number(this.route.snapshot.params['id']);
    this.homeLocation = this.homeService.getLocationById(homeLocationId);
  }

}
