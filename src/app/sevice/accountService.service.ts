import { Injectable } from "@angular/core";

@Injectable({
providedIn: 'root'
})
export class AccountService {
    users :Map<string, Object> = new Map<string, Object>([
        ["admin", {password: 'admin', name: "Admin"}],
        ["admin1", {password: 'admin', name: "Admin1"}]
    ]);

    public getAccount(username: string): any
    {
        let tmp = this.users.get(username);
        return  tmp;
    }
}