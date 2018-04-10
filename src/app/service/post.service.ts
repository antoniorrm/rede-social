import { Post } from './../model/post.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PostService {

  constructor(private http: Http) {

  }

  posts: Post[] = [];

  // tslint:disable-next-line:member-ordering
  url = 'http://rest.learncode.academy/api/antoniorrm/post';

  getPosts() {
      return this.http.get(this.url)
          .map((res: Response) => {
              this.posts = [];
              for (let p of res.json()) {
                  this.posts.push(new Post(p.id, p.nomePessoa, p.texto, p.qtdLikes));
              }
              return this.posts;
          })
          .catch((err: Response) =>
              Observable.throw(err));
  }
  addPost(post: Post) {
      return this.http.post(this.url, post)
          .map((res: Response) => res.json())
          .catch((err: Response) => Observable.throw(err));
  }

  postRecebeuLike(post: Post) {
      post.qtdLikes++;
      return this.http.put(this.url + '/' + post.id, post)
          .map((res: Response) => res.text())
          .catch((err: Response) => Observable.throw(err));
  }

  editarPost(post: Post) {
      return this.http.put(this.url + '/' + post.id, post)
          .map((res: Response) => res.text())
          .catch((err: Response) => Observable.throw(err));
  }

  getPost(id: number) {
      return this.http.get(this.url + '/' + id)
          .map((res: Response) => res.json())
          .catch((err: Response) => Observable.throw(err+'ERRO SERVICE'));
  }

  removePost(post: Post) {
      return this.http.delete(this.url + '/' + post.id)
          .map((res: Response) => res.text())
          .catch((err: Response) => Observable.throw(err + 'Erro ao deletar'));
  }


}
