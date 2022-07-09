import { Component, OnInit } from '@angular/core';
import { AddCdFormComponent } from './add-cd-form/add-cd-form.component';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.scss']
})
export class CdListComponent implements OnInit {

  cds: Array<CdObj> = [
    {
      id: 0,
      band: "Hunter",
      album: "Arachne",
      year: 2015,
      genre: "metal"
    },
    {
      id: 1,
      band: "Nocny Kochanek",
      album: "alkustycznie",
      year: 2021,
      genre: "metal"
    },
    {
      id: 2,
      band: "System of a down",
      album: "Mezmerize",
      year: 2010,
      genre: "metal"
    },
    {
      id: 3,
      band: "Sanah",
      album: "Uczta",
      year: 2022,
      genre: "pop"
    }
  ]

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteElement(id: any) {
    if (confirm("Jesteś pewny/a?")) {
      this.cds = this.cds.filter(obj => obj.id !== id);
    }
  }

  editElement(id: any) {
    window.alert("Edytuj: " + id)
  }

  updateMainCheckbox() {
    this.getMainCheckbox().checked = Array.from(this.getAllCheckboxes())
      .every(c => c.checked);
  }

  private getMainCheckbox(): HTMLInputElement {
    return document.getElementById('mainCheckbox') as HTMLInputElement;
  }

  private getAllCheckboxes(): NodeListOf<HTMLInputElement> {
    return document.getElementsByName('single-element-checkbox') as NodeListOf<HTMLInputElement>;
  }

  applyToAllCheckboxes = (target: any) => {
    var checked = (target as HTMLInputElement).checked

    var checkboxes = this.getAllCheckboxes();

    checkboxes.forEach((item) => {
      item.checked = checked;
    })
  }

  anythingChecked(): boolean {
    return Array.from(this.getAllCheckboxes()).some(c => c.checked)
  }

  refreshPage = () => {
    window.location.reload();
  }

  showAddForm = () => {
    this.matDialog.open(AddCdFormComponent);
  }
}

export class CdObj {
  id!: number;
  band!: string;
  album!: string;
  year!: number;
  genre!: string;
}