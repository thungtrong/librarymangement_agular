import { Injectable } from "@angular/core";

@Injectable({
providedIn: 'root'
})
export class AccountService {
    users :Map<string, Object> = new Map<string, Object>([
        ["admin", {
            id: 22,
            firstName: "Kim Thư",
            lastName: "Huỳnh",
            gender: false,
            dateOfBirth: "1992-08-30",
            contact: "0939944078",
            email: "thu.huynh@gmail.com",
            password: "123456"
            }],
        ["admin1", {
            id: 21,
            firstName: "Ngọc Hải",
            lastName: "Bùi",
            gender: true,
            dateOfBirth: "1990-05-20",
            contact: "0939456782",
            email: "hai.bui@gmail.com",
            password: "123456"
            }]
    ]);
        
    public getAccount(username: string): any
    {
        let tmp = this.users.get(username);
        return  tmp;
    }
}