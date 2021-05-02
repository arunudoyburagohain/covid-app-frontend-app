import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiRoot: string = "http://localhost:3001";

  constructor(private http:HttpClient) { }

  getDistrictDetails(district){
    const url =  `${this.apiRoot}/getdistrictdetails?district=${district}`;
    return this.http.get(url);
  }
}
