import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Librarian } from 'src/app/model/models';
import { LibrarianService } from 'src/app/service/librarianService.service';

@Component({
  selector: 'app-librarian-update',
  templateUrl: './librarian-update.component.html',
  styleUrls: ['./librarian-update.component.css']
})
export class LibrarianUpdateComponent implements OnInit {

  librarian: Librarian =  {gender: undefined};

  constructor(private librarianService: LibrarianService,
              private router: Router,
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
    this.router.navigate(['/librarian'], {queryParams: {page: LibrarianService.pageNumber}});
  }

  stringify(obj: Object): string {
    return JSON.stringify(obj);
  }
}
