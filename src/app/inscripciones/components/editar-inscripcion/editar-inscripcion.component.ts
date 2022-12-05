import { Component, Inject, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionService } from '../../servicios/inscripcion.service';
import {Observable} from 'rxjs';
import {Alumno} from 'src/app/models/alumno';
import {Curso} from 'src/app/models/curso';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import { AlumnoService } from 'src/app/alumnos/servicios/alumno.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.css']
})
export class EditarInscripcionComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  alumnos$!:Observable<Alumno[]>;
  cursoSeleccionado!: Curso;
  alumnoSeleccionado!: Alumno;
  formulario!: FormGroup;

  suscripcion: any;
  inscripciones!: Inscripcion[];

  constructor(
    private inscripcionService : InscripcionService, 
    private cursoService: CursoService, 
    private alumnoService: AlumnoService,
    public dialogRef: MatDialogRef<EditarInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion,
    ) {
      this.formulario = new FormGroup({
        curso: new FormControl(this.inscripcion.curso),
        alumno: new FormControl(this.inscripcion.alumno)
      });
     }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.suscripcion = this.inscripcionService.obtenerInscripciones().subscribe(datos=>{
      this.inscripciones = datos;
    });
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  editar(){
    let encontro : boolean = false;
    if(this.formulario.value.alumno && this.formulario.value.curso)
    {
      const inscripionModificar: Inscripcion = {
        id: this.inscripcion.id,
        alumno : this.formulario.value.alumno,
        curso: this.formulario.value.curso
      }
      for(let i = 0; i<this.inscripciones.length;i++){
        if(inscripionModificar.alumno.id == this.inscripciones[i].alumno.id && inscripionModificar.curso.id == this.inscripciones[i].curso.id)
        {
          encontro = true;
        }
     }
     if(encontro == false){
      this.inscripcionService.editarInscripcion(inscripionModificar);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se ha modificado correctamente la inscripción!',
        showConfirmButton: false,
        timer: 3000
      }).then(()=>{this.suscripcion = this.inscripcionService.obtenerInscripciones().subscribe(datos=>{
        this.inscripciones = datos;
        this.dialogRef.close();
      });
      });
     }else{
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'La inscripcion que quiere modificar es de un alumno ya inscripto!',
      });
     }
    }
  }
  cancelar(){
    this.dialogRef.close();
  }

}
