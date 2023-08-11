import { Injectable } from '@angular/core';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'http://localhost:3000/locations';

  // getAllLocations(): Location[] {
  //   return this.homeLocationList;
  // }

  async getAllHousingLocations(): Promise<Location[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  // getLocationById(id: number): Location | undefined {
  //   return this.homeLocationList.find(location => location.id === id);
  // }

  async getHousingLocationById(id: number): Promise<Location | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: ${firstName} ${lastName} - ${email}`);
  }
}
