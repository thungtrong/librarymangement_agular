import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, Category } from 'src/app/model/models';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  book: Book =  {status: true, typeDocument: 2};
  categories: Category[] = [];
  selectedCategory: string = '';

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getById(id).subscribe({
      next: (data) => {
        this.book = data;
        this.selectedCategory = data.category ? JSON.stringify(data.category) : '';
      },
      error: err => {
        alert("Mô tả quá dài");
      }
    });

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
    // console.log(book);
    this.bookService.update(book).subscribe(
      {
        next: (data) => {
           
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
