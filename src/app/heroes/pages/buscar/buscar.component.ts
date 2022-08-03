import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfeces/heroes-interface';
import { HeroesService } from '../../services/heroes.service';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor( private heroeservice: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroeservice.getCoincidencias( this.termino.trim()).subscribe(heroes => this.heroes = heroes)
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent){
    //si selecciono en el autocompletado algo distinto a un valor
    if (!event.option.value){
      this.heroeSeleccionado = undefined
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroeservice.getHeroePorId( heroe.id!).subscribe( heroe => this.heroeSeleccionado = heroe);
  }

}
