import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:ProductModel[] = []

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
