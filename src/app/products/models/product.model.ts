import { Category } from "./category.model";

export interface ProductModel{
    id:number,
    name:String 
    description:String
    price:number 
    category:Category
    isAvailable:boolean 
  
}