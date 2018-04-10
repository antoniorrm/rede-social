import { PostService } from './../service/post.service';
import { Post } from './../model/post.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent{

  // @Output() newPost = new EventEmitter();
  id: number;
  nome: string = "";
  texto: string = "";


  constructor(private postService: PostService) { }

  addPost(event){
    event.preventDefault();
    this.postService.addPost(new Post(this.id, this.nome, this.texto));
  }

}
