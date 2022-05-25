import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicModel, ComicResultApi, PriceModel } from '../../models/comic.model';
import { ComicsService } from '../../services/comics.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.scss'],
})
export class ComicPageComponent implements OnInit {

  public comicsItems: ComicModel = {};
  public comicItemResult: ComicResultApi | undefined = {};
  public isLoading: boolean = false;
  public pathImage: string = '';
  public price: string | undefined = '0';
  private comicId: number;

  constructor(private _router: ActivatedRoute,
    private _comicsService: ComicsService) {
    this.comicId = Number(this._router.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.getComic();
  }

  private getComic(): void {
    this._comicsService
      .getComicById(this.comicId)
      .pipe(
        finalize(() => {
          this.isLoading = true;
          this.mapComic(this.comicsItems.data?.results);
        })
      )
      .subscribe((response) => {
        this.comicsItems = response;
      });
  }

  private mapComic(comics: ComicResultApi[] | undefined): void {
    for (const comic of comics ?? []) {
      this.comicItemResult = {
        description: comic.description,
        id: comic.id,
        thumbnail: comic.thumbnail,
        title: comic.title,
        prices: comic.prices
      };
    }

    this.pathImage = `${ this.comicItemResult?.thumbnail?.path }.${ this.comicItemResult?.thumbnail?.extension }`;
    this.mapPrice(this.comicItemResult?.prices);
  }

  private mapPrice(prices: PriceModel[] | undefined): void {
    for (const price of prices ?? []) {
      this.price = price.price;      
    }
  }

}
