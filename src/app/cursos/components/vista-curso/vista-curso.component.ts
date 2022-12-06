import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Inscripcion } from 'src/app/models/inscripcion';
import {Observable, map} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {InscripcionService} from 'src/app/inscripciones/servicios/inscripcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-curso',
  templateUrl: './vista-curso.component.html',
  styleUrls: ['./vista-curso.component.css']
})
export class VistaCursoComponent implements OnInit {

  curso!: Curso;
  inscripciones!: Inscripcion[];
  suscripcion: any;
  inscripcionesCurso$!: Observable<Inscripcion[]>;
  idCurso!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private inscripcionService : InscripcionService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.curso = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        comision: parametros.get('comision') || '',
        profesor: parametros.get('profesor') || '',
        fechaInicio: new Date(parametros.get('fechaInicio') || ''),
        fechaFin: new Date(parametros.get('fechaFin') || ''),
        inscripcionAbierta: parametros.get('inscripcionAbierta') === 'true',
        imagen: parametros.get('imagen') || ''
      }
      this.idCurso = parseInt(parametros.get('id') || '0')
    });
    this.inscripcionesCurso$ = this.inscripcionService.obtenerInscripciones().pipe(
      map((inscripciones: Inscripcion[])=>inscripciones.filter((inscripcion: Inscripcion)=> inscripcion.curso.id == this.idCurso))
    );
    this.suscripcion = this.inscripcionesCurso$.subscribe(datos=>{
      this.inscripciones = datos;
    });
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  volverAtras(){
    this.router.navigate(['cursos/listar']);
  }

  eliminar(inscripcion: Inscripcion){
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
          this.suscripcion = this.inscripcionesCurso$.subscribe(datos=>{
            this.inscripciones = datos;
          });
        });
       }
    });
    }
          
}
