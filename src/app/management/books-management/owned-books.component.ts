import { Component } from '@angular/core';
import { BookManagement } from './book-management';

@Component({
  selector: 'app-owned-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['../list-styles.scss']
})
export class OwnedBooksComponent extends BookManagement {
  title = "Lista posiadanych książek";

  refreshElements() {
    this.bookService.getAllOwned()
      .subscribe(data => this.books = data);
  }
}
