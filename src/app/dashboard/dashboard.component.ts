import { Component, OnInit } from '@angular/core';
import { DashBoard, Info } from '../model/models';
import { DashBoardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  controls:Info[] = [];
  icons: string[] = ['fa fa-user', 'fa fa-users', 'fa fa-shopping-cart', 'fa fa-sitemap','fa fa-address-card-o', 'fa fa-book']

  constructor(
    private dashboardService: DashBoardService
  ) { 
    
  }

  ngOnInit(): void {
    this.dashboardService.get().subscribe({
      next: data => {
        this.controls = data.list;
        console.log(this.controls)
      },
      error: (err) => {console.log(err)}
    })
  }
}
