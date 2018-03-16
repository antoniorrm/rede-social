export class Post{
  id:number;
  nomePessoa:string;
  texto:string;
  qtdLikes:number;

  constructor(id:number, nome:string,texto:string, qtd:number) {

    this.id = id;
    this.nomePessoa = nome;
    this.texto = texto;
    this.qtdLikes = qtd;

  }

}
