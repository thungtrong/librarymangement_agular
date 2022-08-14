import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Librarian } from 'src/app/model/models';
import { LibrarianService } from 'src/app/service/librarianService.service';

@Component({
  selector: 'app-librarian-view',
  templateUrl: './librarian-view.component.html',
  styleUrls: ['./librarian-view.component.css']
})
export class LibrarianViewComponent implements OnInit {

  librarian: Librarian =  {gender: undefined};

  constructor(private librarianService: LibrarianService,
              private location: Location,
              private activatedRoute: ActivatedRoute
              ) {    
   }

  ngOnInit(): void {
   let id = this.activatedRoute.snapshot.params['id'];
   this.librarianService.getById(id).subscribe({
      next: (data) => this.librarian = data,
      error: error => console.log(error)
   });
  }

  private saveLibrarian(librarian: Librarian)
  {
    this.librarianService.update(librarian).subscribe(
      {
        next: (data) => {
          // console.log(data);  
          this.goBack();
        },
        error: err => console.log(err)
      }
    );
  }

  onSubmit(): void {
    this.saveLibrarian(this.librarian);
  }

  goBack()
  {
    this.location.back();
  }

  stringify(obj: Object): string {
    return JSON.stringify(obj);
  }
}
