import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marvel', loadChildren: () => import('./modules/marvel/marvel.module').then(m => m.MarvelModule) },
  { path: 'dc', loadChildren: () => import('./modules/dc/dc.module').then(m => m.DcModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
