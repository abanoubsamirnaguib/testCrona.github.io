import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './1navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { VirsSpreedComponent } from './virs-spreed/virs-spreed.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionComponent } from './prevention/prevention.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CountryComponent } from './country/country.component';
import { SearchCnPipe } from './search-cn.pipe';
import { DetailCountryComponent } from './detail-country/detail-country.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    NotfoundComponent,
    HomeComponent,
    VirsSpreedComponent,
    SymptomsComponent,
    PreventionComponent,
    DoctorComponent,
    CountryComponent,
    SearchCnPipe,
    DetailCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
