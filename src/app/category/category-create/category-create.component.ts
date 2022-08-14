import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/models';
import { CategoryService } from 'src/app/service/category.service';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category =  {};
  constructor(private categoryService: CategoryService,
    private location: Location,
              private router: Router) {    
   }

  ngOnInit(): void {
  }

  private saveCategory(category: Category)
  {
    // console.log(category);
    this.categoryService.create(category).subscribe(
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
    this.router.navigate(['/category'], {queryParams: {page: CategoryService.pageNumber}});
  }

}
