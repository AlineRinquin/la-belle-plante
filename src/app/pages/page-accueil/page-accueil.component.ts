import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore'
import { list_products } from '../../data'

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // let categorie = _.filter([list_products], function(product_breadcrumb_label){ return product_breadcrumb_label });

    //console.log(categorie);
    }
}
