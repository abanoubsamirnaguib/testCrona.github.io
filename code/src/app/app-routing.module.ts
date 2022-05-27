import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CountryComponent } from './country/country.component';
import { PreventionComponent } from './prevention/prevention.component';
import { VirsSpreedComponent } from './virs-spreed/virs-spreed.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';


const routes: Routes = [
  {path:"", component:HomeComponent
  //  redirectTo:"home",pathMatch:"full"
  },
  {path:"home", component:HomeComponent},
  {path:"country", component:CountryComponent},
  {path:"Country/:code", component:DetailCountryComponent},
  {path:"Virus-Spread", component:VirsSpreedComponent},
  {path:"symptoms", component:SymptomsComponent},
  {path:"Prevention", component:PreventionComponent},
  {path:"doctors", component:DoctorComponent},
  {path:"about", component:AboutComponent},
  {path:"**", component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
