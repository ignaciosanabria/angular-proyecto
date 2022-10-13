import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Datos } from '../../data/alumnos';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { MatDialog } from '@angular/material/dialog';
import { FormularioAltaAlumnoComponent } from '../formulario-alta-alumno/formulario-alta-alumno.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  alumnos: Alumno[] = Datos.alumnos;
  columnas: string[] = ['nombre', 'curso', 'edad', 'dni', 'acciones'];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);

  constructor(private dialog: MatDialog) { }

  /* Desafio 2 
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
  ];*/

  ngOnInit(): void {
  }

  borrar(id : number)
  {
    let position = this.alumnos.findIndex(alumno => alumno.id == id)
    this.alumnos.splice(position, 1)
    this.dataSource.data = this.alumnos;
  }

  openDialog() {
    let dialog = this.dialog.open(FormularioAltaAlumnoComponent, {
      width: '50%',
      height: '50%',
      
    });

    dialog.beforeClosed().subscribe(res => {
      //console.log(res);
      if(res != null || res != undefined)
      {
        this.alumnos.push(
          {
            ...res,
            id:this.alumnos.length+1
          }
        );
        this.dataSource.data = this.alumnos;
      }
    });
  }

}
