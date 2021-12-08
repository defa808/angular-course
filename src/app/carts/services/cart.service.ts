import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedProducts: CartModel[] = []

  constructor() { }

  addToCart(product: ProductModel) {
    let index = this.selectedProducts.findIndex(x => x.id == product.id);
    if (index == -1) {
      let item = <CartModel>product;
      item.count = 1;
      this.selectedProducts = [...this.selectedProducts, item];
    }
    else {
      this.selectedProducts[index].count++;
    }
  }

  removeCart(item: ProductModel, total=false) {
    let index = this.selectedProducts.findIndex(x => x.id == item.id);
    let removeItem = this.selectedProducts[index];
    if (removeItem.count > 1 && !total) {
      removeItem.count--;
    }
    else {
      this.selectedProducts.splice(index, 1);
    }
  }
}
