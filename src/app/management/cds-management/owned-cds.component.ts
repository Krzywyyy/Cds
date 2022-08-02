import { Component } from '@angular/core';
import { CdManagement } from './cd-management';

@Component({
  selector: 'app-owned-cds',
  templateUrl: './cd-list.component.html',
  styleUrls: ['../list-styles.scss']
})
export class OwnedCdsComponent extends CdManagement {
  title = "Lista posiadanych płyt"
}
