import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/model/models';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-picker',
  templateUrl: './book-picker.component.html',
  styleUrls: ['./book-picker.component.css']
})
export class BookPickerComponent implements OnInit {

  tableHeaders: string[] = ['Tên Sách', 'Tác giả', 'Thể loại', 'Ngôn Ngữ'];
  books: Book[] = [];
  @Output() selectEvent = new EventEmitter();

  constructor(
    private bookService: BookService,
    ) { 
  }

  ngOnInit(): void {
  }


  toggleDialog()
  {
    let dialog = document.getElementById('dialog-book-picker');
    dialog?.classList.toggle('d-none');
  }

  chooseBook(book: Book)
  {
    this.selectEvent.emit(book);
    this.toggleDialog();
  }

  search(title: string)
  {
    if (title === "")
    {
      alert("Hãy nhập tên sách cần tìm");
    }
    this.bookService.findByTitle(title).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => console.log(error)
    });
  }
}
