import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  @Input() book!: Book;

  book$?: Observable<Book[]>;

  ngOnInit(): void {
    this.book$ = this.bookService.getBooks()
  }
}
