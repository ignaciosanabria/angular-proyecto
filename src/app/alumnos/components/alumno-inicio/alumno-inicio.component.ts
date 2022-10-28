import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-inicio',
  templateUrl: './alumno-inicio.component.html',
  styleUrls: ['./alumno-inicio.component.css']
})
export class AlumnoInicioComponent implements OnInit {

  mostrarLista: boolean;

  constructor(private router: Router) {
    this.mostrarLista = false;
   }

  ngOnInit(): void {
  }

  listar(){
    this.mostrarLista = true;
    this.router.navigate(['alumnos/listar']);
  }


}
