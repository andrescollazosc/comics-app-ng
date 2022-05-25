import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelComponent } from './marvel.component';
import { CharacteresPageComponent } from './pages/characteres-page/characteres-page.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';
import { ComicPageComponent } from './pages/comic-page/comic-page.component';

const routes: Routes = [
  { path: '', component: MarvelComponent },
  { path: 'characteres', component: CharacteresPageComponent },
  { path: 'comics', component: ComicsPageComponent },
  { path: 'comic/:id', component: ComicPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { }
