import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  posts: Post [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  capturarEvento(e){
    this.postService.adicionarLike(e);
  }
  capturarEventoRemove(e){
    this.postService.removePost(e);
  }

  addPost(post: Post){
    console.log(post);
    this.postService.addPost(post);
  }

}
