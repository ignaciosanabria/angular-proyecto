import { Injectable } from '@angular/core';
import { Sesion } from '../../models/sesion';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioService } from 'src/app/usuarios/servicios/usuario.service';
import {Usuario} from 'src/app/models/usuario';
import {MatTableDataSource} from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesionSubject!: BehaviorSubject<Sesion>;
  suscripcion: any;
  usuarios!:Usuario[];
  usuarioEncontrado!:Usuario;

  constructor( private usuarioService : UsuarioService) {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
    this.suscripcion = this.usuarioService.obtenerUsuarios().subscribe(datos =>{
      this.usuarios = datos;
     });
  }

  login(usuario: string, contrasena: string, admin: boolean) : boolean{
    //console.log(this.usuarios);
    let encontro : boolean = false;
    for(let i = 0; i < this.usuarios.length;i++){
      if(this.usuarios[i].usuario === usuario && this.usuarios[i].contrasena === contrasena && this.usuarios[i].admin === admin){
        this.usuarioEncontrado = this.usuarios[i];
        encontro = true;
      }
    }
    if(encontro === true)
    {
      const sesion: Sesion = {
        sesionActiva: true,
        usuarioActivo: this.usuarioEncontrado
      };
      this.sesionSubject.next(sesion);
    }
    return encontro;
  }

  logout(){
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject.next(sesion);
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }
}
