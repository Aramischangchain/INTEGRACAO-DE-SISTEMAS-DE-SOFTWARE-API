import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:3000/produtos";

  //Listar
  listarProdutos() : Observable<Produto[]>{
    return this.http.get<Produto[]>(this.URL);
  }

  //Buscar por código
  buscarPorCodigo(codigo : number) : Observable<Produto>{
    return this.http.get<Produto>(this.URL + "/" + codigo);
  }

  //Incluir
  incluir(produto : Produto) : Observable<any> {
    return this.http.post<any>(this.URL, produto);
  }

  //Editar
  editar(codigo : number, produto : Produto) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + codigo, produto);
  }

  //Excluir
  excluir(codigo : number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + codigo);
  }

}
