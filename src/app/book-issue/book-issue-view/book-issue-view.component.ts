import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookIssue } from 'src/app/model/models';
import { BookIssueService } from 'src/app/service/book-issue.service';

@Component({
  selector: 'app-book-issue-view',
  templateUrl: './book-issue-view.component.html',
  styleUrls: ['./book-issue-view.component.css']
})
export class BookIssueViewComponent implements OnInit {

  bookIssue: BookIssue;

  constructor(
    private bookIssueService: BookIssueService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.bookIssue = BookIssueService.selectedBookIssue;
  } 

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    if (!this.bookIssue || (this.bookIssue.id !== id)) {
      this.bookIssueService.getById(id).subscribe({
        next: (data) => {
          this.bookIssue = data;

          console.log(this.bookIssue);
        },
        error: (err) => {console.log(err)}
      });
    }
  }

  goBack()
  {
    this.router.navigate(['/book-issue'], {queryParams: {page: BookIssueService.pageNumber}});
  }

}
