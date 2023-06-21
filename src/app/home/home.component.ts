import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToggleThemeService } from '../toggle-theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faSearch = faSearch;

  constructor(private toggleTheme: ToggleThemeService) {}

  sub = new Subscription;
  ngOnInit() {
    var r = document.getElementById('main');
    this.sub = this.toggleTheme.getTheme.subscribe((isDark) => {
      if (r == null) {
        return;
      }

      if (isDark) {
        r.style.setProperty('--bg-color', 'rgb(40,40,40)');
      }
      else {
        r.style.setProperty('--bg-color', 'rgb(250,250,250)');
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
