import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { list_products } from '../../data';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  listData = list_products;
  public listcategorieFilter!: String[];
  constructor() { }

  ngOnInit(): void {
 

  const listAllCategories = this.listData.map(product => product.product_breadcrumb_label);
  //console.log(listAllCategories);
  const listUniqCategories =_.uniq(listAllCategories);
  console.log(listUniqCategories);
  this.listcategorieFilter = listUniqCategories;

    }
}
