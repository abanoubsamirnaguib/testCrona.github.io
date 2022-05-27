import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronanumbersService {

  constructor(public _HttpClient:HttpClient) { }

getCorona():Observable<any> {
  return this._HttpClient.get("https://api.covid19api.com/summary?fbclid=IwAR3DAicPgp3FfQ5q06gWCluTM-ffOhKlxmpnKkP176ZTpl2cHRlbouF9BPg");
}
}