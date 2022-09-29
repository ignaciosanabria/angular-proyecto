import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  listaAlumnos: Array<Persona> = [
    {nombre: 'Lautaro',apellido: 'Martinez', edad: 25},
    {nombre: 'Emiliano',apellido: 'Martinez', edad: 30},
    {nombre: 'Lionel',apellido: 'Messi', edad: 35},
    {nombre: 'Rodrigo',apellido: 'De Paul', edad: 28},
    {nombre: 'Angel',apellido: 'Di Maria', edad: 34},
    {nombre: 'Paulo',apellido: 'Dybala', edad: 28},
    {nombre: 'Alejandro',apellido: 'Gomez', edad: 34},
    {nombre: 'Joaquin',apellido: 'Correa', edad: 28},
    {nombre: 'Julian', apellido:'Alvarez', edad: 22},
    {nombre: 'Nicolas', apellido:'Otamendi',edad:34}
  ];

  ngOnInit(): void {
  }

}
