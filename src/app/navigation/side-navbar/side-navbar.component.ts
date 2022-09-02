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

  admPanelAction() {
    console.log("Klikłem")
    this.admClickCount++;

    if(this.admClickCount >= 3){
      document.getElementById("adm-panel")!.style.display = "inline-block"
    }
  }

}
