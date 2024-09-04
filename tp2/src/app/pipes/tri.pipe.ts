import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.module';

@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {

  transform(value: any[], sortField: string, sortOrder: string = 'asc'): any[] {
    if (!value || !sortField || sortField === '') return value;

    let sortedArray = value.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return -1;
      } else if (a[sortField] > b[sortField]) {
        return 1;
      } else {
        return 0;
      }
    });

    return sortOrder === 'desc' ? sortedArray.reverse() : sortedArray;
  }

}
