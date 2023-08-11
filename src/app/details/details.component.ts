import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { Location } from '../location';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);

  homeService = inject(HomeService);

  homeLocation: Location | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  // constructor() {
  //   const homeLocationId = Number(this.route.snapshot.params['id']);
  //   this.homeLocation = this.homeService.getLocationById(homeLocationId);
  // }

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.homeService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.homeLocation = housingLocation;
    });
  }

  submitApplication() {
    this.homeService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }

}
