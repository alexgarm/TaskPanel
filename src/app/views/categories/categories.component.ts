import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Category } from 'src/app/Model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];



  constructor(private dataHandler: DataHandlerService) { }



  ngOnInit(): void {

    this.categories = this.dataHandler.getCateries();

  }

}
