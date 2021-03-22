import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'http://localhost:3000/news'; // mock api rest

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getNewsById(id: number): Observable<News> {
    return this.httpClient.get<News>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getNewsByCategory(category: string, page: number): Observable<News[]> {
    const params = new HttpParams()
    .append('category', category.toLowerCase())
    .append('_page', page.toString())
    .append('_limit', '2');

    return this.httpClient.get<News[]>(this.url ,{params})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getNewsByText(text: string): Observable<News[]> {
    const params = new HttpParams()
    .append('q', text.toLowerCase())

    return this.httpClient.get<News[]>(this.url ,{params})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Erro: ${error.status}, ` + `Menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}