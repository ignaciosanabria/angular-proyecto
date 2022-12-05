import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../servicios/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  formulario!: FormGroup;
  alumno!: Alumno;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnoService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      //console.log(parametros)

      this.alumno = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        apellido: parametros.get('apellido') || '',
        edad: parseInt(parametros.get('edad') || '0'),
        dni: parseInt(parametros.get('dni') || '0')
      }

      this.formulario = new FormGroup({

        nombre: new FormControl(this.alumno.nombre, [Validators.required]),
        apellido: new FormControl(this.alumno.apellido),
        edad: new FormControl(this.alumno.edad),
        dni: new FormControl(this.alumno.dni)
      });
    })
  }

  editarAlumno()
  {
       let alumnoEditado: Alumno = {
        id: this.alumno.id,
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        edad: this.formulario.value.edad,
        dni: this.formulario.value.dni
       }
       this.alumnoService.editarAlumno(alumnoEditado);
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has modificado correctamente un alumno!',
        showConfirmButton: false,
        timer: 3000
      }).then(()=>{
        this.router.navigate(['alumnos/listar']);
      });
  }

  cancelar()
  {
    this.router.navigate(['alumnos/listar']);
  }

}
