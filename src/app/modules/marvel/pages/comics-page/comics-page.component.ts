import { Component, OnInit } from '@angular/core';
import { ComicModel, ComicResultApi } from '../../models/comic.model';
import { ComicsService } from '../../services/comics.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-comics-page',
  templateUrl: './comics-page.component.html',
  styleUrls: ['./comics-page.component.scss'],
})
export class ComicsPageComponent implements OnInit {
  public comicsItems: ComicModel = {};
  public comicsItemsResult: ComicResultApi[] | undefined = [];
  public isLoading: boolean = false;

  constructor(private _comicsService: ComicsService) {}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.getComics();
  }

  private getComics(): void {
    this._comicsService
      .getComics()
      .pipe(
        finalize(() => {
          this.isLoading = true;
          this.comicsItemsResult = this.comicsItems.data?.results;
        })
      )
      .subscribe((response) => {
        this.comicsItems = response;
      });
  }
}
