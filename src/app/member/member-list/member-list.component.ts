import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member, Page } from 'src/app/model/models';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  tableHeaders: string[] = ['Họ', 'Tên', 'Giới Tính', 'Số điện thoại', 'Ngày sinh'];
  members: Page<Member> = {content: [], pageable: null, last: false, first: true, totalPages: 1};

  constructor(
    private memtypeService: MemberService,
    private activatedRoute: ActivatedRoute,
    ) { 
  }

  ngOnInit(): void {
    let page = this.activatedRoute.snapshot.queryParams['page'];
    page = page ? page - 1: 0;
    this.getAllMembers(page);
  }

  private getAllMembers(page: number): void {
    this.memtypeService.getList(page).subscribe(
      data => {
        console.log(data);
        this.members = data;
        data.pageable.pageNumber += 1;
      }
    );
  }

  deleteMember(memtype: Member){
    let choose = confirm(`Bạn có chắc chắn muốn xoá ?`);
    if (choose) {
      this.memtypeService.delete(memtype).subscribe({
        next: () => {
          this.getAllMembers(0);
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }

  rangePagination() {
    let start = this.members.pageable.pageNumber;
    let totalPages = this.members.totalPages;
    if (start == totalPages)
      return [start];
    let end = start + 5 <= totalPages ? start + 5 : totalPages;
    return Array.from({ length }, (_, i) => start + i);
  }

}
