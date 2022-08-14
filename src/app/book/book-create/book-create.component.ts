import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, Category } from 'src/app/model/models';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book =  {status: true, typeDocument: 2};
  categories: Category[] = [];
  selectedCategory: string = '';

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private location: Location,
              private router: Router) {    
   }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  private saveBook(book: Book)
  {
    book.category = JSON.parse(this.selectedCategory);
    this.bookService.create(book).subscribe(
      {
        next: (data) => {
          // console.log(data);  
          this.location.back();
        },
        error: err => {
          alert("Mô tả quá dài");
        }
      }
    );
  }


  onSubmit(): void {
    this.saveBook(this.book);
  }

  goBack()
  {
    this.router.navigate(['/book'], {queryParams: {page: BookService.pageNumber}});
  }

  
  getDefaultImg(): string {
    return BookService.defaultImg;
  }

  stringify(obj: Object): string {
    return JSON.stringify(obj);
  }
}
