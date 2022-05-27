import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  students:object[]=[
    {name:"ahmed", age:24, salary:"200$"},
    {name:"ahmed3", age:21, salary:"400$"},
    {name:"ahmed4", age:23, salary:"600$"},

    
  ]
  constructor(public _HttpClient:HttpClient) {


   }
   getConfig():Observable<any>{
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
