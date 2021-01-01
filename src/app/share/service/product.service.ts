import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _domain = "https://localhost:44398";
  constructor(private http:HttpClient) { }
  getAllProduct(){
    return this.http.get(this._domain + "/api/Products");
  }

  deleteProduct(id:number){
   return this.http.delete(this._domain + "/api/Products/"+id)
  }
}
