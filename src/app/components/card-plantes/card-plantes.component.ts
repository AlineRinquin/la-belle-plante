import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-card-plantes',
  templateUrl: './card-plantes.component.html',
  styleUrls: ['./card-plantes.component.scss']
})
export class CardPlantesComponent implements OnInit {

@Input() plant : any;
  constructor() { }

  ngOnInit(): void {
    
  }
}
