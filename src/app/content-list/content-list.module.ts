import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list.component';
import { ContentListService } from './content-list.service';
import { NgxSlickJsModule } from 'ngx-slickjs';

@NgModule({
  declarations: [ContentListComponent],
  imports: [
    CommonModule,
    NgxSlickJsModule.forRoot({
      links: {
        jquery: 'https://code.jquery.com/jquery-3.4.0.min.js',
        slickJs:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        slickCss:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        slickThemeCss:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css',
      },
    }),
  ],
  providers: [ContentListService],
  exports: [ContentListComponent],
})
export class ContentListModule {}
