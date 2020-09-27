import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Category } from '../../category/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  CategoryGetir() {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }

}
