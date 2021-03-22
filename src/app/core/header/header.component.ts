import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  category: string = 'MUNDO';
  filter: string = '';
  url: string = '/';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loadCategory(category: string) {
    this.router.navigate(['/']);
    this.categoryService.setCategory(category);
    this.category = category.toUpperCase();
  }
}
