import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-card-plantes',
  templateUrl: './card-plantes.component.html',
  styleUrls: ['./card-plantes.component.scss']
})
export class CardPlantesComponent implements OnInit {

@Input() plant : any;
@Output() clickLike = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  onClickLike() {
    console.log('click');
    this.clickLike.emit();
  }
}


