import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookIssue } from 'src/app/model/models';
import { BookIssueService } from 'src/app/service/book-issue.service';

@Component({
  selector: 'app-book-issue-update',
  templateUrl: './book-issue-update.component.html',
  styleUrls: ['./book-issue-update.component.css']
})
export class BookIssueUpdateComponent implements OnInit {

  bookIssue: BookIssue = {dateStart: this.currentDateString(), dateEnd: '', status: false, books: [], member: {}};

  constructor(
    private bookIssueService: BookIssueService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.bookIssue = BookIssueService.selectedBookIssue;
  } 

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    if (!this.bookIssue || this.bookIssue.id !== id) {
      this.bookIssueService.getById(id).subscribe({
        next: (data) => {
          this.bookIssue = data;

          console.log(this.bookIssue);
        },
        error: (err) => {console.log(err)}
      });
    }
  }

  
  private saveBookIssue(bookIssue: BookIssue)
  {
    if (this.bookIssue.books.length < 0)
    {
      alert("Chưa chọn bất kỳ sách nào");
      return;
    }

    if (!this.bookIssue.member.id)
    {
      alert("Chưa chọn thành viên mượn sách");
      return;
    }

    for (let book of this.bookIssue.books)
    {
      book.status = false;
    }

    this.bookIssueService.update(bookIssue).subscribe(
      {
        next: (data) => {
          if (data)
          {
            this.goBack();
          }
        },
        error: err => console.log(err)
      }
    );
  }
  
  onSubmit(): void {
    this.saveBookIssue(this.bookIssue);
  }

  goBack()
  {
    this.router.navigate(['/book-issue'], {queryParams: {page: BookIssueService.pageNumber}});
  }

  private currentDateString() {
    let now = new Date();
    return now.toISOString().slice(0, 10);
  }
}
