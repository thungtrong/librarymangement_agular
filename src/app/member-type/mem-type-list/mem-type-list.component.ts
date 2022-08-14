import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberType } from 'src/app/model/models';
import { MemberTypeService } from 'src/app/service/membertype.service';

@Component({
  selector: 'app-mem-type-list',
  templateUrl: './mem-type-list.component.html',
  styleUrls: ['./mem-type-list.component.css']
})
export class MemTypeListComponent implements OnInit {
  tableHeaders: string[] = ['Tên', 'Mô tả'];
  membertypes: MemberType[] = [];
  constructor(
    private memtypeService: MemberTypeService,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.getAllMemberTypes(0);
  }

  private getAllMemberTypes(page: number): void {
    this.memtypeService.getList(page).subscribe(
      data => {
        console.log(data);
        this.membertypes = data.content;
      }
    );
  }

  deleteMemberType(memtype: MemberType){
    let choose = confirm(`Bạn có chắc chắn muốn xoá ?`);
    if (choose) {
      this.memtypeService.delete(memtype).subscribe({
        next: () => {
          this.getAllMemberTypes(0);
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }

  goToViewPage(id: number|undefined): void {
    if (id)
    {
      this.router.navigate(['member-type/view', id]);
    }
  }

  goToUpdatePage(id: number|undefined): void {
    if (id)
    {
      this.router.navigate(['member-type/update', id]);
    }
  }
}
