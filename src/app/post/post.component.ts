import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:Post;

  @Output() recebeuLike = new EventEmitter<Post>();

  eventoCurtir() {
    this.post.qtdLikes++;
    this.recebeuLike.emit(this.post);
  }


  constructor() { }
  ngOnInit() {
  }


}
