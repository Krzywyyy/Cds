import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from 'src/empty/empty.component';
import { OwnedCdsComponent } from './management/cds-management/owned-cds.component';
import { WantedCdsComponent } from './management/cds-management/wanted-cds.component';

const routes: Routes = [
  {path:'cds/owned', component: OwnedCdsComponent},
  {path:'cds/wanted', component: WantedCdsComponent},
  {path:'books/owned', component: WantedCdsComponent},
  {path:'books/wanted', component: WantedCdsComponent},
  {path: '**', redirectTo: 'cds/owned', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
