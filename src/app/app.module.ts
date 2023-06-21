import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { BookComponent } from './book/book.component';
import { TopPicksComponent } from './top-picks/top-picks.component';
import { SearchComponent } from './search/search.component';

// Matrial Components
import {MatInputModule} from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    FeaturedComponent,
    BookComponent,
    TopPicksComponent,
    SearchComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatInputModule,
    MatTooltipModule,
    MatMenuModule,
    MatTabsModule,
    HttpClientModule,
    MatIconModule,
    ScrollingModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
