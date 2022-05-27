import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoronanumbersService } from '../coronanumbers.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})

export class DetailCountryComponent implements OnInit {

  code:string=""
  c:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CoronanumbersService
  ) {
    this.code = this.route.snapshot.paramMap.get('code');

    this.service.getCorona().subscribe( (data) => {
      data.Countries.filter((data:any) => {
        if (data["Country"]==this.code ||data["CountryCode"]==this.code ){
          // console.log(data)
          this.c=data
        }
      })
 
   } 
   );
  
 
   
   


  }

  ngOnInit(): void {
  }

}
