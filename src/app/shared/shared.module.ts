import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  exports: [ 
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module
  ]
})
export class SharedModule { }
