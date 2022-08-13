import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../sevice/account.service';

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
  }
  
  onSubmit()
  {
    let account = this.accountService.getAccount(this.username);
    if (account != null)
    {
      console.log(account);
      if (account.password == this.password)
      {
        localStorage.setItem('user', JSON.stringify(account));
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
