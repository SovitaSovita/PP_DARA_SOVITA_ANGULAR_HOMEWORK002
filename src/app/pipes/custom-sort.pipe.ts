import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSort'
})
export class CustomSortPipe implements PipeTransform {
  transform(subjects: any[], sortKey: string): any[] {
    if (!subjects || subjects.length === 0) {
      return [];
    }
    return subjects.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return -1;
      } else if (a[sortKey] > b[sortKey]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}