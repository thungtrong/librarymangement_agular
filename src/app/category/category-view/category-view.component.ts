import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/models';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  category: Category =  {};
  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private location: Location,) {    
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

  
  goBack()
  {
    this.location.back();
  }

}
