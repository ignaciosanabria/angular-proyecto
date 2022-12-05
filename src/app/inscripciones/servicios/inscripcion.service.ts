import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion';
import { environment } from 'src/environments/environment';
import {Alumno} from '../../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  
  constructor(
    private http: HttpClient
  ) { }

  obtenerInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.api}/inscripciones`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }


  agregarInscripcion(inscripcion: Inscripcion){
    this.http.post(`${environment.api}/inscripciones/`, inscripcion, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editarInscripcion(inscripcion: Inscripcion){
    this.http.put<Inscripcion>(`${environment.api}/inscripciones/${inscripcion.id}`, inscripcion).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  eliminarInscripcion(inscripcion: Inscripcion){
    this.http.delete<Inscripcion>(`${environment.api}/inscripciones/${inscripcion.id}`).pipe(
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
