import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberType, Page } from '../model/models';
import { BaseService, rootApi } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MemberTypeService implements BaseService<MemberType, number> {
  private apiUrl: string = `${rootApi}/membertype`;
  
  constructor(private httpClient: HttpClient) { }

  public getList(page: number): Observable<Page<MemberType>>
  {
    return this.httpClient.get<Page<MemberType>>(`${this.apiUrl}/list?page=${page}`);
  }

  public create(member: MemberType): Observable<MemberType>
  {
    return this.httpClient.post<MemberType>(`${this.apiUrl}/add`, member);
  }

  public getById(id: number): Observable<MemberType>
  {
    return this.httpClient.get<MemberType>(`${this.apiUrl}/find/${id}`);
  }

  public update(member: MemberType): Observable<MemberType>
  {
    return this.httpClient.put<MemberType>(`${this.apiUrl}/update`, member);
  }

  public delete(member: MemberType): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:member});
  }
}
