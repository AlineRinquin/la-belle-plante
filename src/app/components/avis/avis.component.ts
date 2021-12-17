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
  
  //*******************************Correction jérémy************************************

  //onMouseOver(index: number) {
  //  console.log("star over", index);
  //  for (let i = 0; i < this.starState.length ; i++) {
  //    if(i <= index) {
  //      this.starState[i] = 'star-fill';
  //    } else {
  //      this.starState[i] = 'star';
  //    }
  //  }
  //}

  //onMouseLeave() {
  // this.starState = ['star', 'star', 'star', 'star', 'star'];
  //  this.starState = this.starState.map(x => x = 'star');
  //}
}
