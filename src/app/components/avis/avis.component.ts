import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  starArray: any;

  constructor() { 
    this.starArray = ["star","star","star","star","star"]
  }

  ngOnInit(): void {
  }

  onMouseOverStar(i : any){
    console.log(i);
    for (let index=0; index<=i; index ++){
      this.starArray[index]="star-fill"
    }
  }

  onMouseOverStarLeave(i : any){
    console.log(i);
    for (let index=0; index<=i; index ++){
      this.starArray[index]="star"
    }
  }
}
