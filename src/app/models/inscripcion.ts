import { Curso } from "./curso";
import { Alumno } from "./alumno";

export interface Inscripcion{
    id: number;
    alumno: Alumno;
    curso: Curso;
}