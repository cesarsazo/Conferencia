import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAlumnos(){
    return this.http.get(this.baseUrl+'obtenerEstudiantes')
  }

  enviarAlumno(name: string, lastname: string, avatar: string){
    return this.http.post(this.baseUrl+"data", {
      first_name: name,
		  last_name: lastname,
		  avatar: avatar
    })
  }

}
