import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>
  constructor(private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  altaCurso(){
    this.router.navigate(['cursos/alta']);
  }

  eliminarCurso(id: number){
    //this.cursos$ = this.cursoService.obtenerCursos();
    Swal.fire({
      title: 'Estas seguro de borrar el curso?',
      text: "No podras revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursoService.eliminarCurso(id);
        Swal.fire(
          'Borrado!',
          'Tu curso ha sido eliminado correctamente.',
          'success'
        ).then(()=>{
          this.cursos$ = this.cursoService.obtenerCursos(); 
        });
      }
    });
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }
  

}
