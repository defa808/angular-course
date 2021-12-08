import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { ProductModel } from '../models/product.model';
import data from '../../data/products.json'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return data
      .map(x =>
            <ProductModel>{ ...x, category: <Category>x.category })
  }
}


