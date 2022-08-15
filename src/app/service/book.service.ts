import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookIssueCreateComponent } from '../book-issue/book-issue-create/book-issue-create.component';
import { Book, Page } from '../model/models';
import { BaseService, rootApi } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BookService implements BaseService<Book, number> {
  public static defaultImg: string = "http://localhost:8081/api/images/default.jpg";
  private apiUrl: string = `${rootApi}/book`;
  public static pageNumber: number = 1;

  constructor(private httpClient: HttpClient) { }

  public getList(page: number): Observable<Page<Book>>
  {
    BookService.pageNumber = page + 1;
    return this.httpClient.get<Page<Book>>(`${this.apiUrl}/list?page=${page}`);
  }

  public create(book: Book): Observable<Book>
  {
    return this.httpClient.post<Book>(`${this.apiUrl}/add`, book);
  }

  public getById(id: number): Observable<Book>
  {
    return this.httpClient.get<Book>(`${this.apiUrl}/find/${id}`);
  }

  public update(book: Book): Observable<Book>
  {
    return this.httpClient.put<Book>(`${this.apiUrl}/update`, book);
  }

  public updateMultiple(books: Book[]): Observable<Boolean>
  {
    return this.httpClient.put<Boolean>(`${this.apiUrl}/update-multiple`, books);
  }

  public delete(book: Book): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:book});
  }

  public findByTitle(title: string): Observable<Book[]>
  {
    return this.httpClient.get<Book[]>(`${this.apiUrl}/find-by-title?search=${title}`);
  }
}
