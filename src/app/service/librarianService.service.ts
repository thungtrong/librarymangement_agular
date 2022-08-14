import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Librarian, Page } from '../model/models';
import { BaseService, rootApi } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService implements BaseService<Librarian, number> {
  private apiUrl: string = `${rootApi}/librarian`;
  public static pageNumber: number = 1;
  
  constructor(private httpClient: HttpClient) { }

  public getList(page: number): Observable<Page<Librarian>>
  {
    return this.httpClient.get<Page<Librarian>>(`${this.apiUrl}/list?page=${page}`);
  }

  public create(member: Librarian): Observable<Librarian>
  {
    return this.httpClient.post<Librarian>(`${this.apiUrl}/add`, member);
  }

  public getById(id: number): Observable<Librarian>
  {
    return this.httpClient.get<Librarian>(`${this.apiUrl}/find/${id}`);
  }

  public update(member: Librarian): Observable<Librarian>
  {
    return this.httpClient.put<Librarian>(`${this.apiUrl}/update`, member);
  }

  public delete(member: Librarian): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:member});
  }
}
