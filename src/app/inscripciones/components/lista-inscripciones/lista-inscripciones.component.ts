import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AlumnoService } from 'src/app/alumnos/servicios/alumno.service';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionService } from '../../servicios/inscripcion.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EditarInscripcionComponent } from '../editar-inscripcion/editar-inscripcion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  columnas: string[] = ['id', 'curso', 'alumno', 'acciones'];
  dataSource!: MatTableDataSource<Inscripcion>;
  cursoSeleccionado!: Curso;
  alumnoSeleccionado!:Alumno;
  cursos$!: Observable<Curso[]>;
  alumnos$!:Observable<Alumno[]>;
  suscripcion: any;
  inscripciones!: Inscripcion[];
  
  constructor(private cursoService: CursoService, 
    private alumnoService: AlumnoService, 
    private inscripcionService: InscripcionService, 
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.suscripcion = this.inscripcionService.obtenerInscripciones().subscribe(datos=>{
      this.inscripciones = datos;
      this.dataSource = new MatTableDataSource<Inscripcion>(this.inscripciones);
    });
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  editar(inscripcion : Inscripcion)
  {
    this.dialog.open(EditarInscripcionComponent, {
      width: '300px',
      data: inscripcion
    })
  }

  eliminar(inscripcion : Inscripcion)
  {
    Swal.fire({
      title: 'Estas seguro de cancelar esta inscripción?',
      text: "No podras revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed){
         this.inscripcionService.eliminarInscripcion(inscripcion);
         Swal.fire(
          'Borrado!',
          'La inscripción fue anulada correctamente.',
          'success'
        ).then(()=>{
          this.suscripcion = this.inscripcionService.obtenerInscripciones().subscribe(datos=>{
            this.inscripciones = datos;
            this.dataSource = new MatTableDataSource<Inscripcion>(this.inscripciones);
          });
        });
       }
    });
  }

  inscribir(cursoSeleccionado : Curso, alumnoSeleccionado: Alumno){
    let encontro : boolean = false;
    if(cursoSeleccionado && alumnoSeleccionado)
    {
      const inscripcion : Inscripcion = {
        id: 0,
        curso: cursoSeleccionado,
        alumno: alumnoSeleccionado
      }
       for(let i = 0; i<this.inscripciones.length;i++){
           if(inscripcion.alumno.id == this.inscripciones[i].alumno.id && inscripcion.curso.id == this.inscripciones[i].curso.id)
           {
             encontro = true;
           }
        }

      if(encontro == false){
        this.inscripcionService.agregarInscripcion(inscripcion);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se ha registrado correctamente la inscripción!',
          showConfirmButton: false,
          timer: 3000
        }).then(()=>this.suscripcion = this.inscripcionService.obtenerInscripciones().subscribe(datos=>{
          this.inscripciones = datos;
          this.dataSource = new MatTableDataSource<Inscripcion>(this.inscripciones);
        }));
       }
       else{
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'El alumno ya se encuentra inscripto en este curso',
        });
       }
    }
 }

}
