import { Injectable } from '@angular/core';
import { delay, interval, Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private static readonly DELAY = 3000;

  private readonly books = [
    new Book("1984", "George Orwell", 1949),
    new Book("Le meilleur des mondes", "Aldous Huxley", 1932),
    new Book("Knock", "Jules Romains", 1923),
  ]

  //emit value in sequence every 3 second
  source = interval(3000);
//output: 0,1,2,3,4,5....
  subscribe = this.source.subscribe(val => console.log(val));

  getBooks(): Observable<Book[]> {
    return of(this.books)
    .pipe(
      delay(BookService.DELAY)
    );
  }
}
