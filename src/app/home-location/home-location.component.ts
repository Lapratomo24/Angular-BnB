import { Location } from './../location';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-location',
  templateUrl: './home-location.component.html',
  styleUrls: ['./home-location.component.scss']
})
export class HomeLocationComponent implements OnInit {

  @Input() homeLocation!: Location;

  constructor() {}

  ngOnInit(): void {

  }

}
