import { Component, OnInit } from '@angular/core';
import { ContentListService } from './content-list.service';
import { IContentList } from './content-list';
import { Slick } from 'ngx-slickjs';

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

  config: Slick.Config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  getMovieList() {
    this.contentListService.getMoviesList().subscribe((data) => {
      this.movies = data.slice(0, 10);
      console.log(this.movies);
    });
  }
}
