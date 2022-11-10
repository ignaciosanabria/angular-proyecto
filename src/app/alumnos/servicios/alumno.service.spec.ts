import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlumnoService } from './alumno.service';
import { of } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

describe('AlumnoService', () => {
  let service: AlumnoService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterModule, HttpClientTestingModule]
    });
    //service = TestBed.inject(AlumnoService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AlumnoService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('El servicio retorna un arreglo de alumnos mockeados', (done: DoneFn) => {
    const mockDatos = [
      {"id":"1","nombre":"Lautaro","apellido":"Martinez","curso":"Angular","edad":25,"dni":33125487},
      {"id":"2","nombre":"Emiliano","apellido":"Martinez","curso":"React JS","edad":30,"dni":33125487}
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerAlumnosUnit().subscribe((alumnos) => {
      const mockDatos2 = [
        {"id":"1","nombre":"Lautaro","apellido":"Martinez","curso":"Angular","edad":25,"dni":33125487},
        {"id":"2","nombre":"Emiliano","apellido":"Martinez","curso":"React JS","edad":30,"dni":33125487}
      ];
      console.log(alumnos);
      console.log(mockDatos2);
      expect(alumnos).toEqual(mockDatos2);
      done();
    });
  });
});
