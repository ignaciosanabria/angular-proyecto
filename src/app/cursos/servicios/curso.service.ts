import { Injectable } from '@angular/core';
import {  catchError, filter, map, Observable, throwError } from 'rxjs';
import { Curso } from '../../models/curso';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(
    private http: HttpClient
  ) {
    
   }

   obtenerCursos(): Observable<Curso[]>{
    //return this.cursosSubject.asObservable();
    return this.http.get<Curso[]>(`${environment.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${environment.api}/usuarios/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarCurso(curso: Curso){
    this.http.post(`${environment.api}/cursos/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editarCurso(curso: Curso){
    this.http.put<Curso>(`${environment.api}/cursos/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  eliminarCurso(id: number){
    this.http.delete<Curso>(`${environment.api}/cursos/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
