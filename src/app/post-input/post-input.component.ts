import { Router } from '@angular/router';
import { PostService } from './../service/post.service';
import { Post } from './../model/post.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {
  post: Post;
  constructor(private postService: PostService, private route: ActivatedRoute,
    private location: Location) { }
  id_post: number;
  nomePessoa: string = "";
  texto: string = "";
  flagEdit: boolean = false;


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id: number = params['id'];
      if (id) {
        this.postService.getPost(id)
          .subscribe((post: Post) => {
            this.post = post;
            this.nomePessoa = this.post.nomePessoa;
            this.texto = this.post.texto;
            console.log(post);
            this.flagEdit = true;
          });
      }

    });

  }
  enviarPost(event) {
    this.route.params.forEach((params: Params) => {
      let id: number = params['id'];
      if (!this.flagEdit) {
        this.addPost(event);

      } else {
        this.editarPost(this.post);
      }
    });
  }

  addPost(event) {
    this.postService.addPost(new Post(null, this.nomePessoa, this.texto, 0))
      .subscribe(data => {
        console.log(data);
        this.location.back();
      },
        error => console.log(error));
  }
  editarPost(post: Post) {
    post.nomePessoa = this.nomePessoa;
    post.texto = this.texto;
    this.postService.editarPost(post).subscribe(data => {
      console.log(data);
      this.flagEdit = true;
      this.location.back();
    },
      error => console.log(error));
  }

  cancelar() {
    this.location.back();
  }
}
