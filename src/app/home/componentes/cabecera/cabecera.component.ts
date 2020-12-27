import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  // Declarar el input (titulo de la página en la que estamos)
  @Input() titulo: string;
  constructor() { }

  ngOnInit() {}

}
