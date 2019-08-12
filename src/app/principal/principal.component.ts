import { Component, OnInit } from '@angular/core';
import { SelicService } from '../selic.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  selics: Array<any>;
  titulo: String;

  constructor(private selicService: SelicService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.selicService.listarAllSelics().subscribe(dados => this.selics = dados);
    this.titulo = "Taxas Totais";
  }

  listarFiltered(ano: String, mes: String) {
    if (ano == "" && mes == "") {
      this.listar();
    } else {
      this.selicService.listarAllSelicsFiltered(ano, mes).subscribe(dados => this.selics = dados);
      this.titulo = "Taxas Ref. " + mes + " " + ano;
    }
  }

}
