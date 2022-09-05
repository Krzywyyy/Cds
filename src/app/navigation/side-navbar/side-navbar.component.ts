import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  admClickCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

  admPanelSneakyClick() {
    this.admClickCount++;
  }

  showAdmPanel() {
    return this.admClickCount % 3 == 0 && this.admClickCount > 0;
  }
}
