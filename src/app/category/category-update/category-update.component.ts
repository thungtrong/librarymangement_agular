import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/models';
import { CategoryService } from 'src/app/service/category.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category =  {};
  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private router: Router) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.categoryService.getById(id).subscribe({
      next: (data) => {
        this.category = data;
      },
      error: (err) => {console.log(err)}
    })
  }

  private saveCategory(category: Category)
  {
    // console.log(category);
    this.categoryService.update(category).subscribe(
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
    this.saveCategory(this.category);
  }

  
  goBack()
  {
    this.router.navigate(['/category'], {queryParams: {page: this.categoryService.pageNumber+1}})
  }

}
