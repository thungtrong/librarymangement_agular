import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Page } from 'src/app/model/models';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Page<Category> = {content: [], pageable: {pageNumber: 0}, last: false, first: true, totalPages: 1};
  totalPages: number = 1;
  pageNumber: number = 1;
  pagination: number[] = [1];
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    let page = this.activatedRoute.snapshot.queryParams['page'];
    page = page ? page - 1: 0;
    this.getAllCategorys(page);
  }

  private getAllCategorys(page: number): void {
    this.categoryService.getList(page).subscribe(
      data => {
        // console.log(data);
        this.categories = data;
        this.totalPages = data.totalPages ? data.totalPages : 1;
        this.pageNumber = data.pageable.pageNumber;
        this.rangePagination();
      }
    );
    
  }

  deleteCategory(category: Category){
    let choose = confirm(`Bạn có chắc chắn muốn xoá ?`);
    if (choose) {
      this.categoryService.delete(category).subscribe({
        next: () => {
          this.getAllCategorys(0);
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
    console.log(start, end, length, this.pagination);
  }

  goToPageNumber(pageNumber: number): void {
    this.getAllCategorys(pageNumber);
  }

}
