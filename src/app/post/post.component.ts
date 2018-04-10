import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  @Output() recebeuLike = new EventEmitter();
  @Output() removePost = new EventEmitter();

  eventoCurtir() {
    this.recebeuLike.emit(this.post.id);
  }
  eventoRemover() {
    this.removePost.emit(this.post.id);
  }
  constructor() { }
  ngOnInit() {
  }


}
