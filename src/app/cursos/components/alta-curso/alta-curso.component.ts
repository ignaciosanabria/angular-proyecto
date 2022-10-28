import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alta-curso',
  templateUrl: './alta-curso.component.html',
  styleUrls: ['./alta-curso.component.css']
})
export class AltaCursoComponent implements OnInit {
  formulario: FormGroup;

  constructor(private cursoService: CursoService, public dialogRef: MatDialogRef<AltaCursoComponent>) { 
      this.formulario = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        comision: new FormControl(),
        profesor: new FormControl(),
        inicio: new FormControl(),
        fin: new FormControl(),
        inscripcionAbierta: new FormControl()
      });
    }

  ngOnInit(): void {
  }

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    };
    console.log(curso);
    this.cursoService.agregarCurso(curso);
    this.dialogRef.close();
    //this.router.navigate(['cursos/listar']); // localhost/cursos/listar
  }

  cancelar()
  {
    this.dialogRef.close()
  }

}
