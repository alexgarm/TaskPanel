import { Injectable } from '@angular/core';
import { Category } from '../Model/Category';
import { TestData } from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }


getCateries(): Category[]{
  return TestData.categories;
}
}
