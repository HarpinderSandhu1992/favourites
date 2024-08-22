import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  // BOOKS ARRAY
  books = [
    {
      id: 1,
      title: 'Harry Potter',
      genre: 'Fiction',
      description: 'A short descripton',
    },
    {
      id: 2,
      title: 'Harry Potter 2',
      genre: 'Fiction',
      description: 'A short descripton',
    },
  ];
  constructor() {}
}
