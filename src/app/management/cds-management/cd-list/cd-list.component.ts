import { Component, OnInit } from '@angular/core';
import { Cd } from 'src/app/model/cd';
import { FormManagement } from '../../form-management';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.scss', '../../list-styles.scss']
})
export class CdListComponent implements OnInit {

  cds: Array<Cd> = new Array();

  constructor(
    public formManagement: FormManagement
  ) { }

  ngOnInit(): void {
    this.refreshElements();
  }

  fetchElements(): Array<Cd> {
    return [
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
  }

  refreshElements() {
    this.cds = this.fetchElements();
  }

  addElement() {
    let dialogRef = this.formManagement.showForm(this.formManagement.forms.cdForm);

    dialogRef?.afterClosed().subscribe(() => {
      this.cds.push({
        id: 4,
        band: "Behemoth",
        album: "Ov fire and the void",
        year: 2015,
        genre: "black metal"
      });
    })
  }

  deleteElement(cd: any) {
    if (confirm("Jesteś pewny/a?")) {
      this.cds = this.cds.filter(obj => obj !== cd);
    }
  }

  deleteCheckedElements() {

  }

  editElement(cd: any) {
    window.alert("Edytuj: " + cd)
  }
}