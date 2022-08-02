import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdListComponent } from './management/cds-management/cd-list/cd-list.component';
import { CdFormComponent } from './management/cds-management/cd-form/cd-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './navigation/side-navbar/side-navbar.component';
import { CdService } from './services/cd-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CdListComponent,
    CdFormComponent,
    TopNavbarComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
