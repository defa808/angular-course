import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/carts/services/cart.service';
import { Category,displayCategory } from '../../models/category.model';
import { ProductModel } from '../../models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel | undefined
  displayCategory = displayCategory
  constructor(private cartServiec: CartService) { }

  ngOnInit(): void {
  }
  
  onAddToCart() {
    console.log(this.product);
    console.log("Good is bought.");
    if (this.product != null)
      this.cartServiec.addToCart(this.product);
  }
}
