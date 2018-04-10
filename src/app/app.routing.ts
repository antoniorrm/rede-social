import { PostInputComponent } from './post-input/post-input.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Routes, RouterModule } from '@angular/router';



const APP_ROUTES: Routes =
[
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: TimelineComponent},
    {path: 'postar', component: PostInputComponent}
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);
