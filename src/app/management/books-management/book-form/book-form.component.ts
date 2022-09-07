import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from 'src/app/services/book-service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['../../form-styles.scss']
})
export class BookFormComponent implements OnInit {
  addBookForm = new FormGroup({
    id: new FormControl(),
    author: new FormControl(),
    title: new FormControl(),
    year: new FormControl(),
    owned: new FormControl()
  })

  constructor(private bookService: BookService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.fillDataIfEditMode();
    }
  }

  ngOnInit(): void {
  }

  fillDataIfEditMode() {
    this.addBookForm.patchValue(
      {
        id: this.data.id,
        author: this.data.author,
        title: this.data.title,
        year: this.data.year,
        owned: this.data.owned ? "owned" : "wanted"
      }
    )
    console.log(this.addBookForm.value);
  }

  onSubmit(): void {
    this.addBookForm.value.owned = this.addBookForm.value.owned == "owned" ? true : false;
    if (this.addBookForm.value.id) {
      this.bookService.edit(this.addBookForm.value);
    } else {
      this.bookService.add(this.addBookForm.value);
    }
    document.getElementById("dirty-close-button")?.click();
  }
}
