import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private router: Router,
     private accountService: AccountService) { }

  ngOnInit(): void {
    if (localStorage.getItem('librarian'))
    {
      this.router.navigate(['/']);
    }
  }
  
  onSubmit()
  {
    let account = this.accountService.getAccount(this.username);
    if (account != null)
    {
      console.log(account);
      if (account.password == this.password)
      {
        localStorage.setItem('librarian', JSON.stringify(account));
        this.router.navigate(['/']);
      }
      else {
        alert('Tài khoản hoặc mật khẩu không đúng');
      }
      
    } else {
      alert('Tài khoản hoặc mật khẩu không đúng');
    }
  }

}
