export interface IContentList {
  id: number;
  contentId: number;
  title: string;
  contentType: IContentType;
  description: string;
  releaseDate: Date;
  duration: number;
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
