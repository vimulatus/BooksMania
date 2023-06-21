import { Component, HostListener, Input, ChangeDetectionStrategy } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { ToggleThemeService } from 'src/app/toggle-theme.service';

// For screen width
const OFFSET = 82;
const CARD = 160; // card width

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  // font awesome icons
  faLeft = faAngleLeft;
  faRight = faAngleRight

  @Input() title = '';

  // Implementing Pagination
  booksList : string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16'
  ];

  // nRender : number = 1;
  // startIdx = 0;
  // endIdx = this.startIdx + this.nRender;

  constructor(private toggleTheme : ToggleThemeService) {}
  isDark = false;

  public screenWidth : any;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  move(bool: boolean) {
    const SLIDER = document.getElementById('slider');
    if (SLIDER == null) {
      console.error("SLIDER not detected!");
      return;
    }
    if (((SLIDER.offsetWidth + SLIDER.scrollLeft) >= (SLIDER.scrollWidth)) && !bool) {
      SLIDER.scrollTo({
        left: 0,
        behavior: "smooth"
      });
      return;
    }

    if (SLIDER.scrollLeft == 0 && bool) {
      SLIDER.scrollTo({
        left: SLIDER.scrollWidth - SLIDER.offsetWidth,
        behavior: "smooth"
      });
      return;
    }
    var scrollDir = bool ? -(this.screenWidth)/1.1 : this.screenWidth/1.1;
    SLIDER.scrollBy({
      top: 0,
      left: scrollDir,
      behavior: "smooth"
    });
  }
}
