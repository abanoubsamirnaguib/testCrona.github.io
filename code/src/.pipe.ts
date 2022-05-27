import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: ''
})
export class Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
