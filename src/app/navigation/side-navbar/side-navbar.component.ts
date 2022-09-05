import { Component, OnInit } from '@angular/core';
import { AdmService } from 'src/app/services/adm-service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  admClickCount = 0;
  constructor(private admService: AdmService) { }

  ngOnInit(): void {
  }

  admPanelSneakyClick() {
    this.admClickCount++;
  }

  showAdmPanel() {
    let correctlyClicked = this.admClickCount % 3 == 0 && this.admClickCount > 0;
    return correctlyClicked && !this.admService.isAdm();
  }

  becomeSuperUser() {
    let code = (document.getElementById("adm-input") as HTMLInputElement).value;
    if (code === "masło") {
      this.admService.becomeAdm();
    }
  }
}
