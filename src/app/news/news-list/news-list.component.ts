import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/category/category.service';
import { News } from 'src/app/models/news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  currentPage: number = 0;
  category$: string;
  news: News[] = [];
  hasMore: boolean = true;
  currentSearchTerm: string;

  constructor(
    private categoryService: CategoryService,
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(results => {
      this.category$ = results;
        if(this.category$ != 'busca') {
          this.load(results.toLowerCase(), 1);
          this.news = [] as News[];
          this.hasMore = true;
       }
    })

    this.route.queryParams
    .pipe(
      pluck('q'),
      tap(query => this.currentSearchTerm = query))
    .subscribe(query => {
      if(this.category$ == 'busca') {
        this.news = [] as News[];
        this.newsService.getNewsByText(query ? query : '').subscribe(news => {
          this.news = this.news.concat(news);
          this.hasMore = false;
        })
      }
    });
  }

  load(category?: string, page?: number) { 
    this.currentPage = page ? page : ++this.currentPage;
    this.newsService.getNewsByCategory(category || this.category$, this.currentPage)
    .subscribe(news => {
      this.news = this.news.concat(news);

      if(!news.length) {
        this.hasMore = false;
      }
    })
  }
}
