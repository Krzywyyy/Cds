import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from 'src/empty/empty.component';
import { CdListComponent } from './management/cds-management/cd-list/cd-list.component';

const routes: Routes = [
  {path:'', component: CdListComponent},
  {path:'owned', component: CdListComponent},
  {path:'wanted', component: EmptyComponent},
  {path:'statistics', component: EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
