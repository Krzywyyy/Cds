import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cd-form',
  templateUrl: './cd-form.component.html',
  styleUrls: ['./cd-form.component.scss', '../../form-styles.scss']
})
export class CdFormComponent implements OnInit {

  constructor() { }

  addCdForm = new FormGroup({
    band: new FormControl(),
    album: new FormControl(),
    year: new FormControl(),
    genre: new FormControl()
  })

  ngOnInit(): void {
  } 

  onSubmit(): void {
    console.log(this.addCdForm)
  }

  onReset(): void {
    this.addCdForm.reset(this.addCdForm.value);
  }
}
