import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CdService } from 'src/app/services/cd-service';

@Component({
  selector: 'app-cd-form',
  templateUrl: './cd-form.component.html',
  styleUrls: ['../../form-styles.scss']
})
export class CdFormComponent implements OnInit {

  addCdForm = new FormGroup({
    band: new FormControl(),
    album: new FormControl(),
    year: new FormControl(),
    genre: new FormControl()
  })

  constructor(private cdService: CdService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.cdService.add(this.addCdForm.value);
  }
}
