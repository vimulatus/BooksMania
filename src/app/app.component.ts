import { Component } from '@angular/core';
import { ToggleThemeService } from './toggle-theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BooksMania';

  constructor(private toggleTheme : ToggleThemeService) {}

  sub = new Subscription;
  ngOnInit() {
    var r = document.getElementById('app');
    this.toggleTheme.getTheme.subscribe((isDark) => {
      if (r == null) {
        return;
      }

      if (isDark) {
        r.style.setProperty('--bg-color', 'rgb(40,40,40)');
      }
      else {
        r.style.setProperty('--bg-color', 'rgb(250,250,250)');
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
