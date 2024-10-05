import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../../models/products';
import { Category } from '../../models/category';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productlist : Products[];
  catList : Category[];
  myInp : string = "kiko";

  constructor(){
    this.productlist = [
      {id:1, name:"hp", price:30000, quantity:100, imgUrl:"https://i.pinimg.com/564x/49/a5/23/49a52381639c73ca79afe01a2593aff1.jpg", catId:1},
      {id:2, name:"samsung", price:40000, quantity:200, imgUrl:"https://i.pinimg.com/564x/94/4a/55/944a551f296593317cea6599463cc5cf.jpg", catId:2},
      {id:3, name:"dell", price:35000, quantity:300, imgUrl:"https://i.pinimg.com/564x/fd/30/92/fd309299a8ee57cc782846ae4f185de1.jpg", catId:3},
      {id:4, name:"asus", price:4000, quantity:400, imgUrl:"https://i.pinimg.com/564x/40/98/5b/40985b4a6642fd4b89d1105608a5cdab.jpg", catId:2},
      {id:5, name:"sony", price:60000, quantity:500, imgUrl:"https://i.pinimg.com/564x/d7/c3/ca/d7c3ca81db7d2c8e41fda24e2be29cb3.jpg", catId:1}
    ]
    
    this.catList = [
      {id : 1, cat : "mobile phones"}, 
      {id : 2, cat : "tablets"}, 
      {id :3, cat :"laptops"}
    ]

  }

  total = 0;
  totalPrice(num:string, pri:number){
    this.total += Number(num)*pri;
  }

}
