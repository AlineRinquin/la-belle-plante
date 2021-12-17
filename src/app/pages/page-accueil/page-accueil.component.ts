import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
//import { list_products } from '../../data';
import {DataService} from '../../services/data.service'


@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  listData : any[];
  public datas!: any [];
  public listcategorieFilter!: String[];


  constructor(private dataService : DataService) { 
    this.listData = []
  }

  ngOnInit(): void {
  this.dataService.getDataproducts().subscribe((data:any)=>{
    this.datas=data;
    console.log(data);
    this.listcategorieFilter = _.uniq( this.datas.map(product => product.product_breadcrumb_label));
  console.log(this.listcategorieFilter);
  
  })
    }


  onEventLike() {
    this.dataService.plantLiked$.next('')
  }
  
}
