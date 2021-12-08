import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  tracByIds(index: number, item: ProductModel): number { return item.id; }

}
