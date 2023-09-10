import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { } // constructor é onde add os métodos do template

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]"); // JSON parse converte de string para objetos
    console.log(this.itens);
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); // JSON.stringify converte objeto para string
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear;
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

}
