import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfeces/heroes-interface';

@Pipe({
  name: 'heroePipe'
})
export class HeroePipePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
