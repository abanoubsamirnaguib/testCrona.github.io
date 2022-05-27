import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  contact = new FormGroup({
    Name: new FormControl( "qq", [ Validators.required, Validators.minLength(4)]),
    Email: new FormControl(""  ,[Validators.email,Validators.required]),
    Address: new FormControl("", ),
    Company: new FormControl("", ),
    Messages: new FormControl("", [Validators.required, Validators.maxLength(200), Validators.minLength(20)])
  });


  constructor(    ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.contact)
  }

}
