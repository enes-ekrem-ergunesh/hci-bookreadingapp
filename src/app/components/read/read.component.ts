import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent {
  bookId!: number;
  bookUrl!: string;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.bookId = Number(params.get('bookId'));
      this.fetchBook();
    });
  }

  fetchBook() {
    this.bookService.getBook(this.bookId).subscribe((book: any) => {
      this.bookUrl = book.formats['text/html'];
    });
  }
}
