export interface IContentList {
  id: number;
  title: string;
  contentType: IContentType;
  description: string;
  releaseDate: Date;
  imageUrl: string;
  genres: IGenre[];
}

export interface IContentType {
  movie: string;
  serie: string;
}

export interface IGenre {
  id: number;
  name: string;
  code: number;
  contents: IContentList[];
}
