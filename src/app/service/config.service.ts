import { Observable } from "rxjs";
import { Page } from "../model/models";

export const rootApi = "http://localhost:8081/api";

export interface BaseService<T, ID> 
{
    getList(page: number): Observable<Page<T>>
    create(category: T): Observable<T>
    getById(id: ID): Observable<T>
    update(category: T): Observable<T>
    delete(category: T): Observable<void>
}