import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Category } from '../model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _domain = "https://localhost:44398";

  constructor(private http:HttpClient) { }

  getAllCategory()
  {
   return this.http.get(this._domain+"/api/Categories");
  }

  deleteCategory(id:number){
    return this.http.delete(this._domain+"/api/Categories/"+ id);
  }

  insertCategry(data: any){
    return this.http.post(this._domain+"/api/Categories", data);
  }
}
