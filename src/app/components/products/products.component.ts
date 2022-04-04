import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private prodSrv: ProductsService) { }

  products: Product[] = [];

  getProducts() {
    this.prodSrv.getProducts().subscribe((products: Product[]) => {
      console.log("1");
      this.products = products;
      console.log("2");
    });
  }

  ngOnInit(): void {
    console.log("ciao")
    this.getProducts();
  }
}
