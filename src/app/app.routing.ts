import { PostInputComponent } from './post-input/post-input.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { PostEditComponent } from './post-edit/post-edit.component';



const APP_ROUTES: Routes =
[
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {path: 'posts', component: TimelineComponent},
    {path: 'postar', component: PostInputComponent},
    {path: 'editar/:id', component: PostInputComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class routing {

}

