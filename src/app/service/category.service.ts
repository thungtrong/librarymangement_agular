import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Page } from '../model/models';
import { rootApi, BaseService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements BaseService<Category, number> {
  private apiUrl: string = `${rootApi}/category`;
  
  constructor(private httpClient: HttpClient) { }

  public getList(page: number): Observable<Page<Category>>
  {
    return this.httpClient.get<Page<Category>>(`${this.apiUrl}/list?page=${page}`);
  }

  public create(category: Category): Observable<Category>
  {
    return this.httpClient.post<Category>(`${this.apiUrl}/add`, category);
  }

  public getById(id: number): Observable<Category>
  {
    return this.httpClient.get<Category>(`${this.apiUrl}/find/${id}`);
  }

  public update(category: Category): Observable<Category>
  {
    return this.httpClient.put<Category>(`${this.apiUrl}/update`, category);
  }

  public delete(category: Category): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:category});
  }
}
