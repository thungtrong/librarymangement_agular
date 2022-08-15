import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookIssue, Member } from 'src/app/model/models';
import { BookIssueService } from 'src/app/service/book-issue.service';
import { BookService } from 'src/app/service/book.service';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-book-issue-create',
  templateUrl: './book-issue-create.component.html',
  styleUrls: ['./book-issue-create.component.css']
})
export class BookIssueCreateComponent implements OnInit {

  bookIssue: BookIssue = {dateStart: this.currentDateString(), dateEnd: '', status: false, books: [], member: {}};
  books: Book[] = [];
  selectedBooks: Book[] = [];
  selectedMember: Member = {};
  
  constructor(private bookIssueService: BookIssueService,
              private router: Router,
              ) {    
   }

  ngOnInit(): void {
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

    this.bookIssueService.create(bookIssue).subscribe(
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

  private currentDateString() {
    let now = new Date();
    return now.toISOString().slice(0, 10);
  }
}
