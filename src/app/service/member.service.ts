import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member, Page } from '../model/models';
import { BaseService, rootApi } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService implements BaseService<Member, number> {
  private apiUrl: string = `${rootApi}/member`;
  public static pageNumber: number = 1;

  constructor(private httpClient: HttpClient) { }

  public getList(page: number): Observable<Page<Member>>
  {
    MemberService.pageNumber = page + 1;
    return this.httpClient.get<Page<Member>>(`${this.apiUrl}/list?page=${page}`);
  }

  public create(member: Member): Observable<Member>
  {
    return this.httpClient.post<Member>(`${this.apiUrl}/add`, member);
  }

  public getById(id: number): Observable<Member>
  {
    return this.httpClient.get<Member>(`${this.apiUrl}/find/${id}`);
  }

  public update(member: Member): Observable<Member>
  {
    return this.httpClient.put<Member>(`${this.apiUrl}/update`, member);
  }

  public delete(member: Member): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:member});
  }

  public findByName(lastName: string, firstName: string): Observable<Member[]>
  {
    return this.httpClient.get<Member[]>(`${this.apiUrl}/find-by-name?firstname=${firstName}&lastname=${lastName}`);
  }
}
