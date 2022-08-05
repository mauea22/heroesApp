import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/pages/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 public get auth() {
  return this.autService.auth.usuario;
 }


  constructor(  private router: Router,
                private autService: AuthService) { }

  ngOnInit(): void {
  }

  //salir al login (/auth/login)
  logOut(){
    this.router.navigate(['./auth']);
  }
}
