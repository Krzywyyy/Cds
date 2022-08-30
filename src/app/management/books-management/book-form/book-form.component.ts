import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book-service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['../../form-styles.scss']
})
export class BookFormComponent implements OnInit {
  addBookForm = new FormGroup({
    author: new FormControl(),
    title: new FormControl(),
    year: new FormControl()
  })

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.bookService.add(this.addBookForm.value);
  }
}
