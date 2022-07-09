import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdListComponent } from './cd-list/cd-list.component';
import { AddCdFormComponent } from './cd-list/add-cd-form/add-cd-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CdListComponent,
    AddCdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
