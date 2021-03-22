import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputs$ = new Subject();
  @Input() value: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.inputs$.pipe(
      debounceTime(450), 
      distinctUntilChanged())
      .subscribe((query: string) => {
        if(query) {
          let el:HTMLElement = document.getElementById('categoria-busca') as HTMLElement;
          el.click();

          this.router.navigate(['/'], {queryParams: {q: query}});
        }
      });
  }
}
