import { Component, OnInit } from '@angular/core';
import { CoronanumbersService } from '../coronanumbers.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @ViewChild('Pname') Pname: ElementRef;
  
  countries:any={};
  Date:string="";
  d:number = new Date().getDate();
  country_name:string;
  sortSelector:string="NewDeaths";
  constructor(public _CoronanumbersService:CoronanumbersService) { 

    this._CoronanumbersService.getCorona().subscribe(data=>{
      // console.log(data);
      this.countries=data;
      
      this.Date=data.Date
      // console.log(this.Date);
    })



  }
  getWord(event){
console.log(event)
}
getdata(data){
  // alert(data.getAttribute("data-name"));
  this.sortSelector=data.getAttribute("data-name");
  // alert(this.sortSelector)
}
  
  ngOnInit(): void {
   
    (<any>$('#myTable')).stickyTable({
      overflowy: true,
      overflowx: true,
       copyTableClass:true,
    });
  }


}
