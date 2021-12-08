import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input()
  item: CartModel | undefined
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onRemoveFromCart() {
    console.log("Remove item:");
    console.log(this.item);
    if (this.item != null)
      this.cartService.removeCart(this.item);
  }

  onFullRemoveFromCart() {
    console.log("Remove item:");
    console.log(this.item);
    if (this.item != null)
      this.cartService.removeCart(this.item, true);
  }
}
