import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from "../Services/json-service.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  alumnosArray: any = []

  constructor(private servicio: JsonServiceService) { }

  ngOnInit(): void {
    this.servicio.getAlumnos().subscribe( data => {
      this.alumnosArray = data;
    });
  }

}
