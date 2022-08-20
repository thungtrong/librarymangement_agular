import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookIssue, Member } from 'src/app/model/models';
import { BookIssueService } from 'src/app/service/book-issue.service';

@Component({
  selector: 'app-book-issue-update',
  templateUrl: './book-issue-update.component.html',
  styleUrls: ['./book-issue-update.component.css']
})
export class BookIssueUpdateComponent implements OnInit {

  bookIssue: BookIssue = {dateStart: this.currentDateString(), dateEnd: '', status: false, books: [], member: {}};
  selectedBooks: Book[] = [];
  selectedMember: Member = {};
  
  constructor(private bookIssueService: BookIssueService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location
              ) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.bookIssueService.getById(id).subscribe({
      next: (data) => {
        this.bookIssue = data;
        this.selectedBooks = data.books;
        this.selectedMember = data.member;
      },
      error: (err) => {console.log(err)}
    });
    
    let u = localStorage.getItem('librarian');
    if (u) {
      let librarian = JSON.parse(u);
      this.bookIssue.librarian = librarian;
    }

  }

  private saveBookIssue(bookIssue: BookIssue)
  {
    if (this.selectedBooks.length < 0)
    {
      alert("Chưa chọn bất kỳ sách nào");
      return;
    }

    if (!this.selectedMember.id)
    {
      alert("Chưa chọn thành viên mượn sách");
      return;
    }

    bookIssue.member = this.selectedMember;
    for (let book of this.selectedBooks)
    {
      book.status = false;
    }
    bookIssue.books = this.selectedBooks;

    this.bookIssueService.update(bookIssue).subscribe(
      {
        next: (data) => {
          if (data)
          {
            this.router.navigate(['/book-issue'], {queryParams: {page: BookIssueService.pageNumber+1}});
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
    this.location.back();
  }

  stringify(obj: Object): string {
    return JSON.stringify(obj);
  }

  toggleMemberDialog()
  {
    let dialog = document.getElementById('dialog-member-picker');
    dialog?.classList.toggle('d-none');
  }

  receiveMember($event: Member)
  {
    this.selectedMember = $event;
  }

  toggleBookDialog()
  {
    let dialog = document.getElementById('dialog-book-picker');
    dialog?.classList.toggle('d-none');
  }

  receiveBook($event: Book)
  {
    this.selectedBooks.push($event);
  }

  removeItem(i: number)
  {
    this.selectedBooks.splice(i, 1);
  }

  private currentDateString() {
    let now = new Date();
    return now.toISOString().slice(0, 10);
  }
}
