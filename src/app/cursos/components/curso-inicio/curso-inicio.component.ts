import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-curso-inicio',
  templateUrl: './curso-inicio.component.html',
  styleUrls: ['./curso-inicio.component.css']
})
export class CursoInicioComponent implements OnInit {

  mostrarLista: boolean;

  constructor(private router: Router) {
    this.mostrarLista = false;
   }

  ngOnInit(): void {
  }

  listar(){
    this.mostrarLista = true;
    this.router.navigate(['cursos/listar']);
  }
}
