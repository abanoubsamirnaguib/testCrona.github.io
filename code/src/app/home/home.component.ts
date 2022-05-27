import { Component, OnInit } from '@angular/core';
import { CoronanumbersService } from '../coronanumbers.service';
import * as $ from "jquery";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 hello23:string="he";
  coronaData:any;
  constructor(public _CoronanumbersService:CoronanumbersService) { 
    this._CoronanumbersService.getCorona().subscribe( data => {
      this.coronaData=data;
      // console.log(this.coronaData )
    });


  }

  
  ngOnInit(): void {

  }

}
