import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookIssue, Page } from '../model/models';
import { BaseService, rootApi } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BookIssueService implements BaseService<BookIssue, number> {
  private apiUrl: string = `${rootApi}/book-issue`;
  public static pageNumber: number = 1;
  public static selectedBookIssue: BookIssue;

  constructor(private httpClient: HttpClient) { }

  public getList(page: number): Observable<Page<BookIssue>>
  {
    BookIssueService.pageNumber = page + 1;
    return this.httpClient.get<Page<BookIssue>>(`${this.apiUrl}/list?page=${page}`);
  }

  public create(bookIssue: BookIssue): Observable<BookIssue>
  {
    return this.httpClient.post<BookIssue>(`${this.apiUrl}/add`, bookIssue);
  }

  public getById(id: number): Observable<BookIssue>
  {
    return this.httpClient.get<BookIssue>(`${this.apiUrl}/find/${id}`);
  }

  public update(bookIssue: BookIssue): Observable<BookIssue>
  {
    return this.httpClient.put<BookIssue>(`${this.apiUrl}/update`, bookIssue);
  }

  public delete(bookIssue: BookIssue): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:bookIssue});
  }
}
