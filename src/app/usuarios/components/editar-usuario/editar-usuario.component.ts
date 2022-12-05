import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  
  formulario!: FormGroup;
  usuario!:Usuario;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService : UsuarioService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.usuario = {
        id: parseInt(parametros.get('id') || '0'),
        usuario: parametros.get('usuario') || '',
        contrasena: parametros.get('contrasena') || '',
        admin: false
      }
      this.formulario = new FormGroup({
        usuario: new FormControl(this.usuario.usuario, [Validators.required]),
        contrasena: new FormControl(this.usuario.contrasena, [Validators.required]),
      });
     });
  }

  editarUsuario(){
    let usuarioEditado: Usuario = {
      id: this.usuario.id,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: false
    };
    this.usuarioService.editarUsuario(usuarioEditado);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Has modificado correctamente un usuario!',
      showConfirmButton: false,
      timer: 3000
    }).then(()=>{
      this.router.navigate(['usuarios/listar']);
    });
  }

  cancelar()
  {
    this.router.navigate(['usuarios/listar']);
  }

}
