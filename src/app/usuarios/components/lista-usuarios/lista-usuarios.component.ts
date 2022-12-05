import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../../servicios/usuario.service';
import { map, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios!:Usuario[];
  columnas:string[] = ['usuario','contrasena','acciones'];
  dataSource!: MatTableDataSource<Usuario>;
  suscripcion: any;
  usuarioObservable$!: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService, private router : Router) { }

  ngOnInit(): void {
     this.usuarioObservable$ = this.usuarioService.obtenerUsuarios().pipe(
      map((usuarios: Usuario[])=> usuarios.filter((usuario: Usuario)=> usuario.admin === false))
     );
     this.suscripcion = this.usuarioObservable$.subscribe(datos=>{
       this.usuarios = datos;
       this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
     });
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  altaUsuario(){
    this.router.navigate(['usuarios/agregar']);
  }

  editar(usuario : Usuario)
  {
    this.router.navigate(['usuarios/editar', usuario]);
  }

  borrar(id : number)
  {
    Swal.fire({
      title: 'Estas seguro de borrar el usuario?',
      text: "No podras revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(id);
        Swal.fire(
          'Borrado!',
          'Tu usuario ha sido eliminado correctamente.',
          'success'
        ).then(()=>{
          this.usuarioObservable$ = this.usuarioService.obtenerUsuarios().pipe(
            map((usuarios: Usuario[])=> usuarios.filter((usuario: Usuario)=> usuario.admin === false))
           );
           this.suscripcion = this.usuarioObservable$.subscribe(datos=>{
             this.usuarios = datos;
             this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
           });
        });
      }
    });
  }

}
