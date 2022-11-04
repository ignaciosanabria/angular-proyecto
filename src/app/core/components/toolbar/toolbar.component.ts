import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  sesion$!: Observable<Sesion>;

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }

 logout(){
  this.sesionService.logout();
  this.router.navigate(['autenticacion/login']);
 }


}
