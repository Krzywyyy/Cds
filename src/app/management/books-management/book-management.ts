import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/books/book';
import { BookListFilters } from 'src/app/model/books/book-list-filters';
import { BookListSorts } from 'src/app/model/books/book-list-sorts';
import { BookService } from 'src/app/services/book-service';
import { FormManagement } from '../form-management';

@Component({
  template: ''
})
export abstract class BookManagement implements OnInit {

  books: Array<Book> = new Array();

  bookFilters = new BookListFilters();
  bookSorts = new BookListSorts();

  constructor(
    public formManagement: FormManagement,
    public bookService: BookService
  ) { }

  ngOnInit(): void {
    this.refreshElements();
  }

  getBooksToDisplay(): Array<Book> {
    return this.sorted(this.books
      .filter(record => record.author.toLowerCase().includes(this.bookFilters.author.toLowerCase()))
      .filter(record => record.title.toLowerCase().includes(this.bookFilters.title.toLowerCase()))
      .filter(record => this.bookFilters.yearFrom ? this.bookFilters.yearFrom <= record.year : true)
      .filter(record => this.bookFilters.yearTo ? record.year <= this.bookFilters.yearTo : true));
  }

  resetFilters() {
    this.bookFilters = new BookListFilters();
  }

  sorted(bookList: Array<Book>): Array<Book> {
    var list: Array<Book> = [];

    switch (this.bookSorts.column) {
      case 'author':
        list = bookList.sort((book1, book2) => book1.author.localeCompare(book2.author));
        break;
      case 'title':
        list = bookList.sort((book1, book2) => book1.title.localeCompare(book2.title));
        break;
      case 'year':
        list = bookList.sort((book1, book2) => book1.year - book2.year);
        break;
      default:
        list = bookList;
        break;
    }
    return this.bookSorts.ascending === "ascending" ? bookList : bookList.reverse();
  }

  abstract refreshElements(): void;

  addElement() {
    this.formManagement.showForm(this.formManagement.forms.bookForm)?.afterClosed()
      .subscribe(() => this.refreshElements());
  }

  uploadFileButton() {
    document.getElementById("uploadFileInput")?.click();
  }

  uploadFile(event: any) {
    let file = event.srcElement.files.item(0);
    if (!file) {
      return;
    }
    this.bookService.uploadFile(file);
  }

  editElement(book: any) {
    window.alert("Edytuj: " + book)
  }

  deleteCheckedElements() {
    if (!confirm("Jesteś pewny/a?")) {
      return;
    }
    Array.from(document.getElementsByTagName("tr"))
      .map(row => row.getElementsByTagName("td"))
      .filter(row => (row[0].childNodes[0] as HTMLInputElement).checked)
      .map(row => row[1].childNodes[0].textContent)
      .forEach(cdId => this.bookService.delete(cdId));
    this.refreshElements();
  }

  deleteElement(id: any) {
    if (!confirm("Jesteś pewny/a?")) {
      return;
    }
    this.bookService.delete(id);
    this.refreshElements();
  }
}
