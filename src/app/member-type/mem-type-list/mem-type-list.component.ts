import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberType } from 'src/app/model/models';
import { MemberTypeService } from 'src/app/sevice/membertype.service';

@Component({
  selector: 'app-mem-type-list',
  templateUrl: './mem-type-list.component.html',
  styleUrls: ['./mem-type-list.component.css']
})
export class MemTypeListComponent implements OnInit {
  tableHeaders: string[] = ['Thông báo', 'Thao tác'];
  memtypes: MemberType[] = [];
  constructor(
    private router: Router,
    private memtypeService: MemberTypeService
    ) { 
  }

  ngOnInit(): void {
    // this.getAllMemberTypes(0);
  }

  // private getAllMemberTypes(page: number): void {
  //   this.memtypeService.getMemberTypeList(page).subscribe(
  //     data => {
  //       // console.log(data);
  //       this.memtypes = data.content;
  //     }
  //   );
  // }

  // deleteMemberType(memtype: MemberType){
  //   let choose = confirm(`Are you sure you want to delete this memtype`);
  //   if (choose) {
  //     this.memtypeService.deleteMemberType(memtype).subscribe({
  //       next: () => {
  //         this.ngOnInit();
  //       },
  //       error: (error) => console.log(error)
  //     });
  //   }
  //   else
  //     console.log('ko xoa');
  // }
}
