import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { SearchComponent } from './core/search/search.component';
import { LoadButtonComponent } from './news/news-list/load-button/load-button.component';
import { LoadingModule } from './shared/components/loading/loading.module';
import { AutoplayOnHoverDirective } from './shared/directives/autoplay-on-hover.directive';
import { ArticleComponent } from './news/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    SearchComponent,
    LoadButtonComponent,
    AutoplayOnHoverDirective,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
