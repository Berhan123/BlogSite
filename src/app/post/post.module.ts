import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post.component';

export const postRouting = [
  { path: '', component: PostComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(postRouting)
  ]
})
export class PostModule { }
