import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from 'src/empty/empty.component';
import { OwnedCdsComponent } from './management/cds-management/owned-cds.component';
import { WantedCdsComponent } from './management/cds-management/wanted-cds.component';

const routes: Routes = [
  {path:'', component: EmptyComponent},
  {path:'owned', component: OwnedCdsComponent},
  {path:'wanted', component: WantedCdsComponent},
  {path:'statistics', component: EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
