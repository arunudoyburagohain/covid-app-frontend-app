import { Component, OnInit, Input } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-district-details',
  templateUrl: './district-details.component.html',
  styleUrls: ['./district-details.component.css']
})
export class DistrictDetailsComponent implements OnInit {

  @Input() selectedDistrict;

  
  constructor(
    private AppService: AppService
  ) { }
  
  ngOnInit(): void {
  }
  
  private getDistrictDetails(){
    this.AppService.getDistrictDetails(this.selectedDistrict);
  }
}
