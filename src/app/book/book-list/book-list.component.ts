import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, Page } from 'src/app/model/models';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Page<Book> = {content: [], pageable: {}, last: false, first: true, totalPages: 1};
  totalPages: number = 1;
  pageNumber: number = 0;
  pagination: number[] = [1];
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    let page = this.activatedRoute.snapshot.queryParams['page'];
    page = page ? page - 1: 0;
    this.getAllBooks(page);
  }

  private getAllBooks(page: number): void {
    this.bookService.getList(page).subscribe(
      data => {
        this.books = data;
        this.totalPages = data.totalPages ? data.totalPages : 1;
        this.pageNumber = data.pageable.pageNumber;
        this.rangePagination();
      }
    );
    
  }

  deleteBook(book: Book){
    let choose = confirm(`Bạn có chắc chắn muốn xoá ?`);
    if (choose) {
      this.bookService.delete(book).subscribe({
        next: () => {
          this.getAllBooks(BookService.pageNumber);
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

  goToPageNumber(pageNumber: number): void {
    this.getAllBooks(pageNumber);
  }

  goToViewPage(id: number|undefined): void {
    if (id)
    {
      this.router.navigate(['book/view', id]);
    }
  }

  goToUpdatePage(id: number|undefined): void {
    if (id)
    {
      this.router.navigate(['book/update', id]);
    }
  }

  getDefaultImg(): string {
    return BookService.defaultImg;
  }
}
