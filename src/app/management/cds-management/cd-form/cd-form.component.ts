import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdService } from 'src/app/services/cd-service';

@Component({
  selector: 'app-cd-form',
  templateUrl: './cd-form.component.html',
  styleUrls: ['../../form-styles.scss']
})
export class CdFormComponent implements OnInit {

  addCdForm = new FormGroup({
    id: new FormControl(),
    band: new FormControl(),
    album: new FormControl(),
    year: new FormControl(),
    genre: new FormControl(),
    owned: new FormControl()
  })

  constructor(
    private cdService: CdService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.fillDataIfEditMode();
    }
  }

  fillDataIfEditMode() {
    this.addCdForm.patchValue(
      {
        id: this.data.id,
        band: this.data.band,
        album: this.data.album,
        year: this.data.year,
        genre: this.data.genre,
        owned: this.data.owned ? "owned" : "wanted"
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.addCdForm.value.owned = this.addCdForm.value.owned == "owned" ? true : false;
    if (this.addCdForm.value.id) {
      this.cdService.edit(this.addCdForm.value);
    } else {
      this.cdService.add(this.addCdForm.value);
    }
    document.getElementById("dirty-close-button")?.click();
  }
}
