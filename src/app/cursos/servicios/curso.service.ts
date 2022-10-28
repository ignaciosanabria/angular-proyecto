import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Curso } from '../../models/curso';
import { Datos } from '../../data/cursos';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = Datos.cursos;
  private cursosSubject: BehaviorSubject<Curso[]>;
  constructor() {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
   }

   obtenerCursos(): Observable<Curso[]>{
    return this.cursosSubject.asObservable();
  }

  obtenerCurso(id: number): Observable<Curso>{
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id)[0])
    )
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }

  editarCurso(curso: Curso){
    let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);

    if(indice > -1){
      this.cursos[indice] = curso;
    }

    this.cursosSubject.next(this.cursos);
  }

  eliminarCurso(id: number){
    let indice = this.cursos.findIndex((c: Curso) => c.id === id);

    if(indice > -1){
      this.cursos.splice(indice, 1);
    }

    this.cursosSubject.next(this.cursos);
  }
}
