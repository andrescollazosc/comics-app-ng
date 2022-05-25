export interface ComicModel {
  data?: ComicData;
}

export interface ComicData {
  results?: ComicResultApi[] | undefined;
}

export interface ComicResultApi {
  id?: number;
  title?: string;
  description?: string;
  thumbnail?: Thumbnail;
  prices?: PriceModel[];
}

export interface Thumbnail {
  extension?: string;
  path?: string;
}

export interface PriceModel {
  type?: string;
  price?: string;
}

