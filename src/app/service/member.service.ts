import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member, Page } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl: string = "http://localhost:8081/api/member";
  
  constructor(private httpClient: HttpClient) { }

  public getMemberList(page: number): Observable<Page<Member>>
  {
    return this.httpClient.get<Page<Member>>(`${this.apiUrl}/list?page=${page}`);
  }

  public createMember(member: Member): Observable<Member>
  {
    return this.httpClient.post<Member>(`${this.apiUrl}/add`, member);
  }

  public getMemberById(id: number): Observable<Member>
  {
    return this.httpClient.get<Member>(`${this.apiUrl}/find/${id}`);
  }

  public updateMember(member: Member): Observable<Member>
  {
    return this.httpClient.put<Member>(`${this.apiUrl}/update`, member);
  }

  public deleteMember(member: Member): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:member});
  }
}
