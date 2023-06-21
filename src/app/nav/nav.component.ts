import { Component, ElementRef, Renderer2, Input, ViewChild } from '@angular/core';
import { faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ToggleThemeService } from '../toggle-theme.service';
import { Subscription } from 'rxjs';
import { animate, keyframes, style, transition, trigger, state } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('rise', [
      state('set', style({
        transformOrigin: 'bottom',
        rotate: '180deg',
        visibility: 'hidden',
        opacity: 0
      })),
      state('rise', style({
        transformOrigin: 'bottom',
        rotate: '0deg',
        visibility: 'visible',
        opacity: 1
      })),
      transition('set => rise', [
        animate('0.5s 0s ease-in-out')
      ])
    ]),
    trigger('set', [
      state('rise', style({
        transformOrigin: 'bottom',
        rotate: '0deg',
        visibility: 'visible',
        opacity: 1
      })),
      state('set', style({
        transformOrigin: 'bottom',
        rotate: '-180deg',
        visibility: 'hidden',
        opacity: 0
      })),
      transition('rise => set', [
        animate('0.5s 0s ease-in-out')
      ])
    ])
  ]
})

export class NavComponent {
  // font-awesome icons
  searchIcon = faMagnifyingGlass;
  faMoon = faMoon;
  faSun = faSun;
  faBookmark = faBookmark;
  logoutIcon = faRightFromBracket;
  faGear = faGear;
  
  // Toggle Theme
  constructor(
    private themeService: ToggleThemeService,
    private router: Router, 
    private elementRef: ElementRef,
    private renderer: Renderer2,
    ) {
      this.renderer.listen('window', 'click', 
      (e: Event) => {
        if (this.userBtn != undefined && e.target !== this.userBtn.nativeElement) {
          this.showDropdown = false;
        }
      })
    }

  isDark = true;
  toggleTheme() {
    this.isDark = !this.isDark;
    this.themeService.setTheme(this.isDark);
  }

  sub = new Subscription;
  ngOnInit() {
    const r = document.getElementById('nav');
    this.sub = this.themeService.getTheme.subscribe((isDark) => {
      this.isDark = isDark;
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
    this.elementRef.nativeElement.remove();
    this.sub.unsubscribe;
  }

  // enableSearch
  @Input() enableSearch = false;
  query = '';
  redirect(path: string) {
    this.router.navigate([path]);
  }
  onSubmit(e: KeyboardEvent) {
    if (e.key == 'Enter') {
      e.preventDefault();
      this.redirect('/search');
    }
  }

  // dropdown
  showDropdown = false;
  @ViewChild('userBtn') userBtn: ElementRef | undefined;  
}
