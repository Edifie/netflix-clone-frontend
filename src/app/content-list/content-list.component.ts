import { Component, OnInit } from '@angular/core';
import { ContentListService } from './content-list.service';
import { IContentList } from './content-list';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  movies: IContentList[] = [];

  constructor(private contentListService: ContentListService) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.contentListService.getMoviesList().subscribe((data) => {
      this.movies = data;
    });
  }
}
