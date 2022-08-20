import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookIssue, Page } from 'src/app/model/models';
import { BookIssueService } from 'src/app/service/book-issue.service';

@Component({
  selector: 'app-book-issue-list',
  templateUrl: './book-issue-list.component.html',
  styleUrls: ['./book-issue-list.component.css']
})
export class BookIssueListComponent implements OnInit {

  tableHeaders: string[] = ['Thành viên', 'Ngày mượn', 'Ngày trả', 'Trạng Thái','Ghi chú'];
  bookIssues: Page<BookIssue> = {content: [], pageable: {}, last: false, first: true, totalPages: 1};
  totalPages: number = 1;
  pageNumber: number = 0;
  pagination: number[] = [1];
  constructor(
    private bookIssueService: BookIssueService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    let page = this.activatedRoute.snapshot.queryParams['page'];
    page = page ? page - 1: 0;
    this.getAllBookIssues(page);
  }

  private getAllBookIssues(page: number): void {
    this.bookIssueService.getList(page).subscribe(
      data => {
        BookIssueService.pageNumber = page;
        this.bookIssues = data;
        this.totalPages = data.totalPages ? data.totalPages : 1;
        this.pageNumber = data.pageable.pageNumber;
        this.rangePagination();
      }
    );
    
  }

  deleteBookIssue(bookIssue: BookIssue){
    let choose = confirm(`Bạn có chắc chắn muốn xoá ?`);
    if (choose) {
      this.bookIssueService.delete(bookIssue).subscribe({
        next: () => {
          this.getAllBookIssues(BookIssueService.pageNumber);
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }

  rangePagination() {
    let start = this.pageNumber - 3 >= 1 ? this.pageNumber - 3 : 0;
    if (start == 0 && this.totalPages == 1){
      this.pagination = [start];
      return;
    }
    let end = this.pageNumber + 3 <= this.totalPages ? this.pageNumber + 3 : this.totalPages;
    let length = end - start;
    this.pagination = Array.from({ length }, (_, i) => start + i);
  }

  getStatus(bookIssue: BookIssue): string {
    if (bookIssue.status)
      return 'Đã trả';
    
    let now = new Date();
    let end = new Date(bookIssue.dateEnd);
    if (!bookIssue.status && end < now)
    {
      return 'Quá hạn';
    }
    
    return 'Chưa trả';
  }

  goToPageNumber(pageNumber: number): void {
    this.getAllBookIssues(pageNumber);
  }

  goToViewPage(bookIssue: BookIssue): void {
    let id = bookIssue.id;
    BookIssueService.selectedBookIssue = bookIssue;
    this.router.navigate(['book-issue/view', id]);
  }

  goToUpdatePage(bookIssue: BookIssue): void {
    let id = bookIssue.id;
    BookIssueService.selectedBookIssue = bookIssue;
    this.router.navigate(['book-issue/update', id]);
  }

}
