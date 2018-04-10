import { Post } from './../model/post.model';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(data);
    },
      error => console.log(error));
  }

  EventoLike(post) {
    this.postService.postRecebeuLike(post).subscribe(data => {
      console.log(data);
      this.getAllPost();
    },
      error => console.log(error));
  }
  EventoRemove(post) {
    this.postService.removePost(post).subscribe(data => {
      console.log(data);
      this.getAllPost();
    },
      error => {
        console.log(error);
        console.log("ID : " + post.id);
      });
  }

}
