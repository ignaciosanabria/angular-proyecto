import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  formularioUsuario: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private usuarioService : UsuarioService) {
    this.formularioUsuario = fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required])
    });

   }

  ngOnInit(): void {
  }

  agregarUsuario(){
    const usuario : Usuario = {
      id: Math.round(Math.random()*1000),
      usuario: this.formularioUsuario.value.usuario,
      contrasena: this.formularioUsuario.value.contrasena,
      admin : false
    };
    this.usuarioService.agregarUsuario(usuario);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Has agregado correctamente un usuario!',
      showConfirmButton: false,
      timer: 3000
    }).then(()=>{
      this.router.navigate(['usuarios/listar']);
    });
  }

  cancelar(){
    this.router.navigate(['usuarios/listar']);
  }

}
