import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCn'
})
export class SearchCnPipe implements PipeTransform {

 
  transform(countryN: any, inText: string, sort?:string): any {
    if(!countryN){return []};
    if(!inText){
      if(sort=="CountryCode" ||sort=="Country"){
    return  countryN.sort((a , b)=>{return a[sort] > b[sort] ?1 :-1 });
      }
      // return countryN
      // console.log( countryN.sort( (a , b  )=>{return b.NewConfirmed - a.NewConfirmed}))
      return  countryN.sort(function(b , a ){return a[sort] - b[sort] } );
    }
    return countryN.filter( (func)=>{
    //  console.log(func.Country.toLowerCase());
    //  console.log(inText.toLowerCase());
   if ( func.Country.toLowerCase().includes(inText.toLowerCase()) || func.CountryCode.toLowerCase().includes(inText.toLowerCase()) )  {
    return func
    } 
    })
    

  }

}
