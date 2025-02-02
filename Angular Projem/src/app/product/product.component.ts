import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductFilterPipe } from "./product-filter.pipe";
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, ProductFilterPipe, FormsModule] // Buraya ekleyin
 // Buraya ekleyin
})
export class ProductComponent {
  constructor(private alertifyService:AlertifyService){ }
  title = "Ürün Listesi"
  filterText=""
  products : Product[] = [
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook", imageUrl:"https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG"}
  ]
    
  
addToCart(product: Product) {
  this.alertifyService.success(product.name+ " added")
}


}
