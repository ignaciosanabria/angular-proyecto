import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/alumnos/servicios/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-alta-alumno',
  templateUrl: './formulario-alta-alumno.component.html',
  styleUrls: ['./formulario-alta-alumno.component.css']
})
export class FormularioAltaAlumnoComponent implements OnInit {
 
  formularioAlumno: FormGroup;
  cursos: string[] = ['React JS', 'Angular', 'Vue JS'];
  
  constructor( private fb: FormBuilder, private router: Router, private alumnoService : AlumnoService) {
    this.formularioAlumno = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    });
   }

   cambiarCurso(e: any) {
    
  }

  ngOnInit(): void {
  }

  agregarAlumno(){
    const alumno : Alumno = {
      id: Math.round(Math.random()*1000),
      nombre: this.formularioAlumno.value.nombre,
      apellido:this.formularioAlumno.value.apellido,
      edad: this.formularioAlumno.value.edad,
      dni: this.formularioAlumno.value.dni
    }
    this.alumnoService.agregarAlumno(alumno);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Has agregado correctamente un alumno!',
      showConfirmButton: false,
      timer: 3000
    }).then(()=>{
      this.router.navigate(['alumnos/listar']);
    });
  }

  cancelar(){
    this.router.navigate(['alumnos/listar']);
  }

}
