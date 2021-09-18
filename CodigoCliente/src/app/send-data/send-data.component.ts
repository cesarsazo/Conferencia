import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from "../Services/json-service.service";

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent implements OnInit {

  constructor(private servicio: JsonServiceService) { }

  ngOnInit(): void {
  }

  sendData(event: any){
    const target = event.target;
    const name = target.querySelector('#nombre').value;
    const lastname = target.querySelector('#apellido').value;
    const avatar = target.querySelector('#avatar').value;
    console.log(name)
    console.log(lastname)
    console.log(avatar)
    this.servicio.enviarAlumno(name, lastname, avatar).subscribe( data => {
      if(data){
        alert("La informacion se envio.")        
      }
    });
  }

}
