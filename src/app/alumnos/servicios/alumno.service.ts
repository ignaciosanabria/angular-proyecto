import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, Observable, Subject, throwError } from 'rxjs';
import { Alumno } from '../../models/alumno';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Datos } from 'src/app/data/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos: Alumno[] = Datos.alumnos;
  private alumnosSubject: BehaviorSubject<Alumno[]>;

  constructor(private http: HttpClient) { 
   this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  /*obtenerAlumnosPromise(): Promise<Alumno[] | any>{
    return new Promise((resolve, reject) => {
      if(this.alumnos.length > 0){
        resolve(this.alumnos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay alumnos disponibles en este momento'
        });
      }
    });
  }*/

  obtenerAlumnos(): Observable<Alumno[]>{
    //return this.alumnosSubject.asObservable();
    return this.http.get<Alumno[]>(`${environment.api}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerAlumnosArray() : Observable<Alumno[]>{
    return this.alumnosSubject.asObservable();
  }

  obtenerAlumno(id: number): Observable<Alumno>{
    return this.http.get<Alumno>(`${environment.api}/alumnos/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarAlumno(alumno: Alumno){
    this.http.post(`${environment.api}/alumnos/`, alumno, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  editarAlumno(alumno: Alumno){
    this.http.put<Alumno>(`${environment.api}/alumnos/${alumno.id}`, alumno).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  eliminarAlumno(id: number){
    this.http.delete<Alumno>(`${environment.api}/alumnos/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

  obtenerAlumnosUnit(){
    return this.http.get(`${environment.api}/alumnos`);
  }

}
