import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Librarian } from 'src/app/model/models';
import { LibrarianService } from 'src/app/service/librarianService.service';

@Component({
  selector: 'app-librarian-create',
  templateUrl: './librarian-create.component.html',
  styleUrls: ['./librarian-create.component.css']
})
export class LibrarianCreateComponent implements OnInit {

  librarian: Librarian =  {gender: undefined};

  constructor(private librarianService: LibrarianService,
              private router: Router,
              ) {    
   }

  ngOnInit(): void {
   
  }

  private saveLibrarian(librarian: Librarian)
  {
    this.librarianService.create(librarian).subscribe(
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
