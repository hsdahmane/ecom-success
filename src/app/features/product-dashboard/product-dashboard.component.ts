import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {

  rows: any = [];
  columns: any = [];
  size?: number;


  constructor(private http: HttpClient) {

    this.initColumns();


    this.http.get("product-api/products").subscribe(response => {
      this.rows = response;
      this.size = 10;
    })
  }

  initColumns() {
    this.columns = [
      {prop: 'id', name: 'id'},
      {prop: 'name', name: 'Nom du Produit'},
      {prop: 'price', name: 'Prix'}
    ]
  }


}
