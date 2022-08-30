import { Component } from '@angular/core';
import { BookManagement } from './book-management';

@Component({
  selector: 'app-wanted-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['../list-styles.scss']
})
export class WantedBooksComponent extends BookManagement {
  title = "Lista pożądanych książek";

  refreshElements() {
    this.bookService.getAllOwned()
      .subscribe(data => this.books = data);
  }
}
