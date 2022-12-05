import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-inicio',
  templateUrl: './usuario-inicio.component.html',
  styleUrls: ['./usuario-inicio.component.css']
})
export class UsuarioInicioComponent implements OnInit {

  mostrarLista: boolean;

  constructor(private router: Router) {
    this.mostrarLista = false;
   }

  ngOnInit(): void {
  }

  listar(){
    this.mostrarLista = true;
    this.router.navigate(['usuarios/listar']);
  }

}
