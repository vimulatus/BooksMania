import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookList } from './book';
import { ToggleThemeService } from '../toggle-theme.service';

const API_KEY = '&key=AIzaSyAK05tQcGZWegQXEuHThGEuTxpPO-HuRIY';
const URI = 'https://books.googleapis.com/books/v1/volumes?q=';
// const NYT_API_KEY = 'GoGQXVE6hUR8V4HI1jl4xW1HEelY8Gnc';
// const NYT_URI = 'https://api.nytimes.com/svc/books/v3/';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  bookList : Book[] = [];

  constructor(private http: HttpClient) {}

  getBook() {
    // return this.http.get<BookList>(URI+'atomic%20habits+inauthor:james'+API_KEY);
  }
}
