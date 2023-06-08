import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  bookList: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bookService.getBooks().subscribe((books: any)=>{
      console.log(books.results);
      books.results.forEach((book: any) => {
        this.bookList.push(new Book(book.id, book.title, book.authors[0].name, book.formats['image/jpeg'], book.formats['text/html']));
      });
    })
  }

  goToReadPage(bookUrl: string) {
    window.location.href = bookUrl;
  }
}
