import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";


@Component({
  selector: 'app-district-select',
  templateUrl: './district-select.component.html',
  styleUrls: ['./district-select.component.css']
})
export class DistrictSelectComponent implements OnInit {

  selectedDistrict;



  districts = [
  'Baksa',
  'Barpeta',
  'Biswanath',
  'Bongaigaon',
  'Cachar',
  'Charaideo',
  'Chirang',
  'Darrang',
  'Dhemaji',
  'Dhubri',
  'Dibrugarh',
  'Dima Hasao (North Cachar Hills)',
  'Goalpara',
  'Golaghat',
  'Hailakandi',
  'Hojai',
  'Jorhat',
  'Kamrup',
  'Kamrup Metropolitan',
  'Karbi Anglong',
  'Karimganj',
  'Kokrajhar',
  'Lakhimpur',
  'Majuli',
  'Morigaon',
  'Nagaon',
  'Nalbari',
  'Sivasagar',
  'Sonitpur',
  'South Salamara-Mankachar',
  'Tinsukia',
  'Udalguri',
  'West Karbi Anglong'
]



  medicineRequirements = [
  ]

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
  }

  onDistrictSelect(district:any){
    this.selectedDistrict = district;
    this.AppService.getDistrictDetails(this.selectedDistrict).subscribe((details)=>{
      console.log(details);
    });
  }

    
  

 

}
