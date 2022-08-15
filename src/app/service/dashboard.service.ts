import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashBoard, Page } from '../model/models';
import { rootApi, BaseService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  private static apiUrl: string = `${rootApi}/dashboard`;

  constructor(private httpClient: HttpClient) { }

    public get(): Observable<DashBoard>
    {
        return this.httpClient.get<DashBoard>(DashBoardService.apiUrl);
    }

}
