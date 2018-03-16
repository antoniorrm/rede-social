import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  posts: Post [] = [new Post(0, 'Raimundo','hoje tive várias aulas muito boas', 0),
                        new Post(1, 'Pereira','TO feliz pq a isabelly me chamou de pai', 0),
                          new Post(2, 'Jordao','Mito das GALAXIAS', 0),
                            new Post(3, 'Jackson','So coloca lenha nas brigas', 0)];
  constructor() { }

  capturarEvento(e){
    console.log(e);
  }
  ngOnInit() {
  }

}
