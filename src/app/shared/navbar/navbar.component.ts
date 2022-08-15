import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: string = "Librarian Name"
  constructor(private router: Router) { }

  ngOnInit(): void {
    let u = localStorage.getItem('librarian');
    if (u)
    {
      let librarian = JSON.parse(u);
      this.name = librarian.lastName + ' ' + librarian.firstName;
    }
  }

  logout(): void {
    localStorage.removeItem("librarian");
    this.router.navigate(['/login']);
  }

}
