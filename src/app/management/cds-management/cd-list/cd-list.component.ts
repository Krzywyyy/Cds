import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cd } from 'src/app/model/cd';
import { CdService } from 'src/app/services/cd-service';
import { FormManagement } from '../../form-management';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.scss', '../../list-styles.scss']
})
export class CdListComponent implements OnInit {

  cds: Array<Cd> = new Array();

  constructor(
    public formManagement: FormManagement,
    private cdr: ChangeDetectorRef,
    private cdService: CdService
  ) { }

  ngOnInit(): void {
    this.refreshElements();
  }

  refreshElements() {
    this.cdService.getAllOwned()
      .subscribe(data => this.cds = data);
  }

  addElement() {
    let dialogRef = this.formManagement.showForm(this.formManagement.forms.cdForm);

    dialogRef?.afterClosed().subscribe(() => {
      this.cds.push({
        id: "4",
        band: "Behemoth",
        album: "Ov fire and the void",
        year: 2015,
        genre: "black metal"
      });
    })
  }

  editElement(cd: any) {
    window.alert("Edytuj: " + cd)
  }

  deleteCheckedElements() {
    if (!confirm("Jesteś pewny/a?")) {
      return;
    }
    Array.from(document.getElementsByTagName("tr"))
      .map(row => row.getElementsByTagName("td"))
      .filter(row => (row[0].childNodes[0] as HTMLInputElement).checked)
      .map(row => row[1].childNodes[0].textContent)
      .forEach(cdId => this.deleteElement(cdId, true));
    this.cdr.detectChanges()
  }

  deleteElement(id: any, auto: boolean) {
    if (auto || confirm("Jesteś pewny/a?")) {
      this.cds = this.cds.filter(obj => obj.id !== id);
    }
  }
}