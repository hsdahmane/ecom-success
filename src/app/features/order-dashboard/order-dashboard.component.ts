import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})
export class OrderDashboardComponent {

  rows: any = [];
  columns: any = [];
  size?: number;


  constructor(private http: HttpClient) {

    this.initColumns();


    this.http.get("order-api/orders").subscribe(response => {
      this.rows = response;
      this.size = 10;
    })
  }


  initColumns() {
    this.columns = [
      {prop: 'productId', name: 'id du produit'},
      {prop: 'sourceCustomer', name: 'Id de l\'Acheteur'},
      {prop: 'targetCustomer', name: 'Id du Vendeur'},
      {prop: 'orderDate', name: 'Date de la commande'}
    ];

  }




}
