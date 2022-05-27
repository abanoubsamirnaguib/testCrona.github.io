import { Component, OnInit } from '@angular/core';
import { CoronanumbersService } from '../coronanumbers.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Date:string="";
  constructor(public _CoronanumbersService:CoronanumbersService) { 

    this._CoronanumbersService.getCorona().subscribe(data=>{  
      this.Date=data.Date
      console.log(this.Date);
    })
  }

  ngOnInit(): void {
  }

}
