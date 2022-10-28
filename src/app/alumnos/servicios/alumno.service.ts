import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Alumno } from '../../models/alumno';
import { Datos } from '../../data/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos: Alumno[] = Datos.alumnos;
  private alumnosSubject: BehaviorSubject<Alumno[]>;

  constructor() { 
   this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  obtenerAlumnosPromise(): Promise<Alumno[] | any>{
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
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.alumnosSubject.asObservable();
  }

  obtenerAlumno(id: number): Observable<Alumno>{
    return this.obtenerAlumnos().pipe(
      map((alumnos: Alumno[]) => alumnos.filter((alumno: Alumno) => alumno.id === id)[0])
    )
  }

  agregarAlumno(Alumno: Alumno){
    this.alumnos.push(Alumno);
    this.alumnosSubject.next(this.alumnos);
  }

  editarAlumno(Alumno: Alumno){
    let indice = this.alumnos.findIndex((c: Alumno) => c.id === Alumno.id);

    if(indice > -1){
      this.alumnos[indice] = Alumno;
    }

    this.alumnosSubject.next(this.alumnos);
  }

  eliminarAlumno(id: number){
    let indice = this.alumnos.findIndex((c: Alumno) => c.id === id);

    if(indice > -1){
      this.alumnos.splice(indice, 1);
    }

    this.alumnosSubject.next(this.alumnos);
  }

}
