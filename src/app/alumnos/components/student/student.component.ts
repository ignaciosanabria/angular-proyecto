import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/alumnos/servicios/alumno.service';
import { Observable } from 'rxjs';
import { NombreApellidoPipe } from '../../pipes/nombre-apellido.pipe';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //alumnos: Alumno[] = Datos.alumnos;
  alumnos!: Alumno[]
  //columnas: string[] = ['nombre', 'alumno', 'edad', 'dni', 'acciones'];
  columnas: string[] = ['nombre','curso', 'edad', 'dni', 'acciones']
  //dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  dataSource!: MatTableDataSource<Alumno>;
  //promesa: any;
  suscripcion: any;

  constructor(private alumnoService :  AlumnoService, private router: Router) {

   }

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
   /* this.promesa = this.alumnoService.obtenerAlumnosPromise()
         .then((valor: Alumno[]) => {
          console.log(valor);
          this.alumnos = valor;
          this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
         }).catch((error: any) => {
            console.log(error);
         });*/
        this.suscripcion = this.alumnoService.obtenerAlumnos().subscribe(datos =>{
          //console.log("DESDE API !!");
          //console.log(datos); 
          this.alumnos = datos;
          //console.log(this.alumnos);
          this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
          //console.log(this.dataSource);
         });
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  borrar(id : number)
  {
    this.alumnoService.eliminarAlumno(id);
    Swal.fire({
      title: 'Estas seguro de borrar el alumno?',
      text: "No podras revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.alumnoService.eliminarAlumno(id);
        Swal.fire(
          'Borrado!',
          'Tu alumno ha sido eliminado correctamente.',
          'success'
        ).then(()=>{
          this.suscripcion = this.alumnoService.obtenerAlumnos().subscribe(datos =>{
            this.alumnos = datos;
            this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
           })
        });
      }
    });
  }

  altaAlumno() {
    this.router.navigate(['alumnos/agregar']);
  }

  editar(alumno: Alumno){
    this.router.navigate(['alumnos/editar', alumno]);
  }

}
