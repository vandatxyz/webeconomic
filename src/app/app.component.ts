import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Category } from './share/model/category';
import { Product } from './share/model/product';
import { CategoryService } from './share/service/category.service';
import { ProductService } from './share/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listCategory:Category[] = [];
  listProduct:Product[] = [];
  idForm;
  formData = {
    code: "",
    name: ""
  }
  constructor(private categoryService : CategoryService,
    private productService : ProductService){

  }
  ngOnInit(): void {
this.loadCategory();
this.loadProduct();
  }
// [Post]
  loadCategory(){
    this.categoryService.getAllCategory().subscribe((rs) =>{
      this.listCategory = rs as Category[];
  });
}

loadProduct(){
  this.productService.getAllProduct().subscribe((rs)=>{
    this.listProduct = rs as Product[];
  })
}

// [Delete]
deleteCategory2(id){
  var ans = confirm("Do you want to delete customer with Id: " + id);
  if(ans){
    this.categoryService.deleteCategory(id).subscribe((rs)=>{

    alert("Xóa ok!");
    this.loadCategory();
},(err)=>{
  alert('Không xóa được!');
})
}
}

deleteProduct2(id){
  this.productService.deleteProduct(id).subscribe((rs)=>{

      alert("Xóa ok!");
      this.loadProduct();
  },(err)=>{
    alert('Không xóa được!');
  })
}
// [Post]
insert(){
this.categoryService.insertCategry(this.formData).subscribe((rs)=>{
  alert("Them thanh cong!");
  this.loadCategory();
},
(err) => {
  alert("thêm mới thất bại");
});
}

select(category){
  this.idForm = category.id;
  this.formData.code = category.code;
  this.formData.name = category.name;
}
}
