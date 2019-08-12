import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelicService {

  allSelicUrl = 'http://localhost:8080/selic/estimativasSelic';
  selicAcumulado = 'http://localhost:8080/selic/acumuladoAnual';

  allSelicFilteredUrl = 'http://localhost:8080/selic/consultaEstimativaSelic';
  mediaAnualSelic = 'http://localhost:8080/selic/consultaMediaSelic';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  listarAllSelics() {
    //any[] se refere ao retorno de qualquer tipo de objeto.
    return this.http.get<any[]>(this.allSelicUrl);
  }

  listarSelicAcumulado() {
    //any[] se refere ao retorno de qualquer tipo de objeto.
    return this.http.get<any[]>(this.selicAcumulado);
  }

  listarAllSelicsFiltered(ano: String, mes: String) {
    var json = JSON.stringify({ 'ano': ano, 'mes': mes });
    //any[] se refere ao retorno de qualquer tipo de objeto.
    return this.http.post<any[]>(this.allSelicFilteredUrl, json, this.httpOptions);
  }

  listarMediaSelic(ano: String) {
    var json = JSON.stringify({ 'ano': ano });
    //any[] se refere ao retorno de qualquer tipo de objeto.
    return this.http.post<any[]>(this.mediaAnualSelic, json, this.httpOptions);
  }

}
