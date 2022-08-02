import { Component } from '@angular/core';
import { CdManagement } from './cd-management';

@Component({
  selector: 'app-wanted-cds',
  templateUrl: './cd-list.component.html',
  styleUrls: ['../list-styles.scss']
})
export class WantedCdsComponent  extends CdManagement {
  title = "Lista pożądanych płyt"
}