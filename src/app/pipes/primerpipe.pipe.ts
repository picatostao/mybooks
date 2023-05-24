import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primerpipe'
})
export class PrimerpipePipe implements PipeTransform {

  transform(value: string):string{
    let tostring:string
    tostring= "Ref-"+value
    return tostring
  }

}
