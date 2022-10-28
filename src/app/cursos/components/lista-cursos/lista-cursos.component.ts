import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import {Alumno} from 'src/app/models/alumno';
import { AltaCursoComponent } from '../alta-curso/alta-curso.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>
  constructor(private dialog: MatDialog,private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  openDialog()
  {
    let dialog = this.dialog.open(AltaCursoComponent, {
      width: '50%',
      height: '50%',
      
    });
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }
  

}
