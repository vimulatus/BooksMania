import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { BookDataService } from './book-data.service';
import { Book, BookList } from './book';
import { ToggleThemeService } from '../toggle-theme.service';
import { Observable, Subscribable, Subscriber, Subscription } from 'rxjs';
import { transition, trigger, style, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [
    trigger('showHide', [
      state('hide', style({
        transform: 'translateX(-100%)'
      })),
      state('show', style({
        transform: 'translateX(0%)'
      })),
      transition('show <=> hide', [
        animate('0.3s 0s ease-in-out')
      ])
    ])
  ]
})
export class BookComponent {
  bookList ?: BookList;
  book ?: Book;
  isDark : boolean;
  isMouseOnTop = false;

  handleHover(bool: boolean) {

  }

  constructor(private data : BookDataService,
    private toggleTheme : ToggleThemeService) {
      this.isDark = false;
    }
    
    
    sub : Subscription = new Subscription;
    
    // ngOnInit() {
      // this.data.getBook().subscribe(books => {
        //   this.bookList = books;
        //   console.log(this.bookList.items)
        //   this.book = this.bookList?.items[0];
        //   console.log(this.bookList.items);
        // })
        
        // setTimeout(() => {
          //   console.log(this.book);
          // }, 10);
          // }  
          
    ngOnInit() {
     // theme
     var r = document.getElementById('card');
      this.sub = this.toggleTheme.getTheme.subscribe((isDark) => {
        if (r == null) {
          return;
        }
 
        this.isDark = isDark;
      });
  }

  @Input() title = '';

}
