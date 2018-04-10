import { Post } from './../model/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  posts: Post [] = [new Post(0, 'Raimundo', 'Hoje tive várias aulas muito boas', 0),
                        new Post(1, 'Pereira', 'Tô feliz pq a isabelly me chamou de pai', 0),
                          new Post(2, 'Jordao', 'Mito das GALAXIAS', 0),
                            new Post(3, 'Jackson', 'So coloca lenha nas brigas', 0)];

  constructor() { }

  adicionarLike(id: number){
    this.getPost(id).qtdLikes++;
  }
  addPost(post: Post){
    this.posts.push(post);
  }
  getPosts(){
    return this.posts;
  }
  getPost(id: number): Post{
    const post: Post = this.posts.find(x => x.id === id);
    return post;
  }
  removePost(id: number){
    let index = this.posts.indexOf(this.getPost(id));
     this.posts.splice(index, 1);
  }

}
