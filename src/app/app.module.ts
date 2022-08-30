import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdFormComponent } from './management/cds-management/cd-form/cd-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './navigation/side-navbar/side-navbar.component';
import { CdService } from './services/cd-service';
import { BookService } from './services/book-service';
import { HttpClientModule } from '@angular/common/http';
import { OwnedCdsComponent } from './management/cds-management/owned-cds.component';
import { WantedCdsComponent } from './management/cds-management/wanted-cds.component';
import { OwnedBooksComponent } from './management/books-management/owned-books.component';
import { WantedBooksComponent } from './management/books-management/wanted-books.component';
import { BookFormComponent } from './management/books-management/book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CdFormComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    OwnedCdsComponent,
    WantedCdsComponent,
    OwnedBooksComponent,
    WantedBooksComponent,
    BookFormComponent,
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
    CdService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
