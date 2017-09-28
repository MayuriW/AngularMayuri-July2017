import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'mobileFilter'
  //pure:true
})
export class MobileFilterPipe implements PipeTransform {

  transform(value: string[], filter?: string): any {
    if (filter) {
      let filtered = [];
      filter = filter.toUpperCase();
      value.forEach(mob => {
        console.log(" -- "+mob.charAt(0));
        if (mob.charAt(0) === filter) {
          filtered.push(mob);
        }
      });
      return filtered;
    }
    return value;
  }
}