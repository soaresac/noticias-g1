import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './news/article/article.component';
import { NewsListComponent } from './news/news-list/news-list.component';

const routes: Routes = [
  { path: 'p/:id', component: ArticleComponent },
  { path: '**', component: NewsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
