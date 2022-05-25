import { Component, Input, OnInit } from '@angular/core';
import { ComicResultApi, Thumbnail } from '../../models/comic.model';

@Component({
  selector: 'app-comics-card',
  templateUrl: './comics-card.component.html',
  styleUrls: ['./comics-card.component.scss'],
})
export class ComicsCardComponent implements OnInit {
  @Input() dataCard: ComicResultApi = {};

  public pathImage: string | undefined = '';

  constructor() {}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    let thumbnail: Thumbnail =
      this.dataCard?.thumbnail ?? this.getDefaultImage();

    this.pathImage = `${thumbnail.path}.${thumbnail.extension}`;
  }

  private getDefaultImage(): Thumbnail {
    return {
      path: '',
      extension: '',
    };
  }
}
