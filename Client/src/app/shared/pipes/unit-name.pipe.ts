import { Pipe, PipeTransform } from '@angular/core';
import { UnitDic } from 'app/models/types';

@Pipe({
  name: 'unitName'
})
export class UnitNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return UnitDic[value];
  }

}
