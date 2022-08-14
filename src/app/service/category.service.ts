import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Page } from '../model/models';
import { rootApi, BaseService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements BaseService<Category, number> {
  private static apiUrl: string = `${rootApi}/category`;
  public static pageNumber: number = 1;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(`${CategoryService.apiUrl}/all`);
  }

  public getList(page: number): Observable<Page<Category>>
  {
    CategoryService.pageNumber = page + 1;
    return this.httpClient.get<Page<Category>>(`${CategoryService.apiUrl}/list?page=${page}`);
  }

  public create(category: Category): Observable<Category>
  {
    return this.httpClient.post<Category>(`${CategoryService.apiUrl}/add`, category);
  }

  public getById(id: number): Observable<Category>
  {
    console.log("service", CategoryService.pageNumber);
    return this.httpClient.get<Category>(`${CategoryService.apiUrl}/find/${id}`);
  }

  public update(category: Category): Observable<Category>
  {
    return this.httpClient.put<Category>(`${CategoryService.apiUrl}/update`, category);
  }

  public delete(category: Category): Observable<void>
  {
    return this.httpClient.delete<void>(`${CategoryService.apiUrl}/delete`, {body:category});
  }
}
