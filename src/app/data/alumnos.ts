import { Alumno } from '../models/alumno';

export class Datos{
    static alumnos: Alumno[] = [
      {
        id: 1, nombre: 'Lautaro',apellido: 'Martinez', curso: "Angular", edad: 25, dni: 33125487
      },
      {
        id: 2, nombre: 'Emiliano',apellido: 'Martinez', curso: "React JS", edad: 30, dni: 33125487
      },
      {
        id:3 , nombre: 'Lionel',apellido: 'Messi', curso: "Angular", edad: 35, dni: 33125487
      },
      {
        id:4 , nombre: 'Rodrigo',apellido: 'De Paul', curso: "Vue JS", edad: 28, dni: 33125487
      },
      {
        id:5 , nombre: 'Angel',apellido: 'Di Maria', curso: "React JS", edad: 34, dni: 33125487
      },
      {
        id:6, nombre: 'Paulo',apellido: 'Dybala', curso: "Angular", edad: 28, dni: 33125487
      },
      {
        id:7, nombre: 'Alejandro',apellido: 'Gomez', curso: "Vue JS", edad: 34, dni: 33125487
      },
      {
        id:8, nombre: 'Joaquin',apellido: 'Correa', curso: "Angular", edad: 28, dni: 33125487
      },
    ];
  }