import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { MarvelComponent } from './marvel.component';
import { WelcomeMarvelCardComponent } from './components/welcome-marvel-card/welcome-marvel-card.component';
import { CharacteresPageComponent } from './pages/characteres-page/characteres-page.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';
import { ComicsCardComponent } from './components/comics-card/comics-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CharacterePageComponent } from './pages/charactere-page/charactere-page.component';
import { ComicPageComponent } from './pages/comic-page/comic-page.component';


@NgModule({
  declarations: [
    MarvelComponent,
    WelcomeMarvelCardComponent,
    CharacteresPageComponent,
    ComicsPageComponent,
    ComicsCardComponent,
    CharacterCardComponent,
    SpinnerComponent,
    CharacterePageComponent,
    ComicPageComponent
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    HttpClientModule
  ]
})
export class MarvelModule { }
