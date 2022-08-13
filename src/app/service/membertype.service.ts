import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberType, Page } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class MemberTypeService {
  private apiUrl: string = "http://localhost:8081/api/membertype";
  
  constructor(private httpClient: HttpClient) { }

  public getMemberTypeList(page: number): Observable<Page<MemberType>>
  {
    return this.httpClient.get<Page<MemberType>>(`${this.apiUrl}/list?page=${page}`);
  }

  public createMemberType(membertype: MemberType): Observable<MemberType>
  {
    return this.httpClient.post<MemberType>(`${this.apiUrl}/add`, membertype);
  }

  public getMemberTypeById(id: number): Observable<MemberType>
  {
    return this.httpClient.get<MemberType>(`${this.apiUrl}/find/${id}`);
  }

  public updateMemberType(membertype: MemberType): Observable<MemberType>
  {
    return this.httpClient.put<MemberType>(`${this.apiUrl}/update`, membertype);
  }

  public deleteMemberType(membertype: MemberType): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:membertype});
  }
}
