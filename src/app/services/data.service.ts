import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  
  constructor(private httpClient: HttpClient) {}

  getDataproducts() {
    // requete API
    return this.httpClient.get('http://localhost:3000/list_products');
  }
}

