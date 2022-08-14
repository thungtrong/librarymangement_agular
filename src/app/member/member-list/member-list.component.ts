import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member, Page } from 'src/app/model/models';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  tableHeaders: string[] = ['Họ', 'Tên', 'Giới Tính', 'Số điện thoại', 'Ngày sinh', 'Loại thành viên'];
  members: Page<Member> = {content: [], pageable: null, last: false, first: true, totalPages: 1};
  pageNumber: number = 1;
  totalPages: number = 1;
  pagination: number[] = [1];
  constructor(
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    let page = this.activatedRoute.snapshot.queryParams['page'];
    page = page ? page - 1: 0;
    this.getAllMembers(page);
  }

  private getAllMembers(page: number): void {
    this.memberService.getList(page).subscribe(
      data => {
        console.log(data);
        this.members = data;
        this.pageNumber = data.pageable.pageNumber;
        this.totalPages = data.totalPages;
        
        this.rangePagination();
      }
    );
  }

  deleteMember(memtype: Member){
    let choose = confirm(`Bạn có chắc chắn muốn xoá ?`);
    if (choose) {
      this.memberService.delete(memtype).subscribe({
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
    let start = this.pageNumber - 3 >= 1 ? this.pageNumber - 3 : 0;
    if (start == this.totalPages){
      this.pagination = [start];
      return;
    }
    let end = this.pageNumber + 3 <= this.totalPages ? this.pageNumber + 3 : this.totalPages;
    let length = end - start;
    this.pagination = Array.from({ length }, (_, i) => start + i);
  }

  goToPageNumber(pageNumber: number): void {
    this.getAllMembers(pageNumber);
  }

  goToViewPage(id: number|undefined): void {
    if (id)
    {
      this.router.navigate(['member/view', id]);
    }
  }

  goToUpdatePage(id: number|undefined): void {
    if (id)
    {
      this.router.navigate(['member/update', id]);
    }
  }


}
