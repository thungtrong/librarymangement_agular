import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Librarian, Page } from 'src/app/model/models';
import { LibrarianService } from 'src/app/service/librarianService.service';

@Component({
  selector: 'app-librarian-list',
  templateUrl: './librarian-list.component.html',
  styleUrls: ['./librarian-list.component.css']
})
export class LibrarianListComponent implements OnInit {

  tableHeaders: string[] = ['Họ', 'Tên', 'Giới Tính', 'Số điện thoại', 'Ngày sinh'];
  librarians: Page<Librarian> = {content: [], pageable: null, last: false, first: true, totalPages: 1};
  pageNumber: number = 1;
  totalPages: number = 1;
  pagination: number[] = [1];
  constructor(
    private librarianService: LibrarianService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    let page = this.activatedRoute.snapshot.queryParams['page'];
    page = page ? page - 1: 0;
    this.getAllLibrarians(page);
  }

  private getAllLibrarians(page: number): void {
    this.librarianService.getList(page).subscribe(
      data => {
        this.librarians = data;
        this.pageNumber = data.pageable.pageNumber;
        this.totalPages = data.totalPages;
        
        this.rangePagination();
      }
    );
  }

  deleteLibrarian(memtype: Librarian){
    let choose = confirm(`Bạn có chắc chắn muốn xoá ?`);
    if (choose) {
      this.librarianService.delete(memtype).subscribe({
        next: () => {
          this.getAllLibrarians(0);
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
    this.getAllLibrarians(pageNumber);
  }

  goToViewPage(id: number|undefined): void {
    if (id)
    {
      this.router.navigate(['librarian/view', id]);
    }
  }

  goToUpdatePage(id: number|undefined): void {
    if (id)
    {
      this.router.navigate(['librarian/update', id]);
    }
  }

}
