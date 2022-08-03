import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfeces/heroes-interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(private heroeService: HeroesService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

    //cuando la aplicacion se contruye, verificamos el url
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.heroeService.getHeroePorId(id))
    )
    .subscribe(heroe => this.heroe = heroe );
  }

  guardar(){
    //validacion para que al menos tenga el campo super heroe
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      //actualizar
      //hago un put mediante actualizarHeroe
      this.heroeService.actualizarHeroe(this.heroe).subscribe(heroe => console.log('actualizando...', heroe))
    }else {
      //crear
     //cuando hago el submit disparo agregarHeroe ( realiza el post) con el heroe como parametro
      this.heroeService.agregarHeroe( this.heroe).subscribe(heroe => {
              this.router.navigate(['/heroes/editar', heroe.id]);
            })
    }
  }

  eliminar(){
    this.heroeService.eliminarHeroe(this.heroe.id!).subscribe(heroe => this.heroe = heroe )
  }

}
