import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/models';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  book: Book =  {status: true, typeDocument: 2};

  constructor(private bookService: BookService,
              private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getById(id).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: err => {
        alert("Mô tả quá dài");
      }
    });
  }

  goBack()
  {
    this.router.navigate(['/book'], {queryParams: {page: BookService.pageNumber}});
  }

  
  getDefaultImg(): string {
    return BookService.defaultImg;
  }

}
