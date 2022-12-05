import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/servicios/sesion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      usuario: new FormControl('',[Validators.required]),
      contrasena: new FormControl('',[Validators.required]),
      admin: new FormControl(false)
    })
  }

  ngOnInit(): void {
  }

  login(){
    //console.log(this.formulario.value);
    const login : boolean = this.sesionService.login(this.formulario.value.usuario, this.formulario.value.contrasena, this.formulario.value.admin);
    if(login === true)
    {
      this.router.navigate(['inicio']);
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Usuario y/o Contrasena incorrecta',
        text: 'Porfavor ingresa nuevamente sus datos para entrar!'
      });
      this.formulario.reset();
      this.formulario.controls['admin'].setValue(false);
    }
  }

}
