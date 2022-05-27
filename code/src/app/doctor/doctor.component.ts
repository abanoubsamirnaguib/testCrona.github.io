import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor() { }
  text:string="h";
  ngOnInit(): void {
    // $(".icofont-envelope").text().slice(0,17);
    
    //  x:string;
    $(".icon-style-list li:nth-of-type(2) span").each(function(e){
      let x=$(this).text();
     $(this).text(x.slice(0,13)+"\n....");
     $(this).hover(function(){
      $(this).text(x);
     },function(){
      $(this).css({
        "position":"absolute","padding-top":"12px"
      })
      $(this).text(x.slice(0,13)+"\n....");
     })
    } )

     console.log( )
  }

}
