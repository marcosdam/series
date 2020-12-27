import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.page.html',
  styleUrls: ['./drama.page.scss'],
})
export class DramaPage implements OnInit {
  // Var titulo que nos traerá la cabecera
  titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
