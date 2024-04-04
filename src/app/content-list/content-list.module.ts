import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list.component';
import { ContentListService } from './content-list.service';

@NgModule({
  declarations: [ContentListComponent],
  imports: [CommonModule],
  providers: [ContentListService],
})
export class ContentListModule {}
