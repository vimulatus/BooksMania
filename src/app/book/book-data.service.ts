import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookList } from './book';
import { ToggleThemeService } from '../toggle-theme.service';

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
