import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [DataService]
})
export class CategoryComponent implements OnInit {

  constructor(private Getir: DataService) { }
  categorys: Category[];
  ngOnInit(): void {
    this.Getir.CategoryGetir().subscribe(data => { this.categorys = data; });
  }

}
