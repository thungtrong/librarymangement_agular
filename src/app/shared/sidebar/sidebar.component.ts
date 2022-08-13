import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: Item[] = [
    {title: 'Bảng Điều Khiển', path: "/dashboard"},
    {title: 'Thành Viên',  path:"/member"}, 
    {title: 'Loại Thành Viên',  path:"/member-type"},
    {title: 'Thể Loại',  path:"/category"},
    {title: 'Sách',  path:"/book"},
    {title: 'Thủ Thư',  path:"/librarian"},
    {title: 'Mượn Trả',  path:"/book-issue"},
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
