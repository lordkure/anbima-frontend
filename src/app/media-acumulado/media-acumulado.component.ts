import { Component, OnInit } from '@angular/core';
import { SelicService } from '../selic.service';

@Component({
  selector: 'app-media-acumulado',
  templateUrl: './media-acumulado.component.html',
  styleUrls: ['./media-acumulado.component.css']
})
export class MediaAcumuladoComponent implements OnInit {

  selics: Array<any>;
  media_selic: Object;
  titulo: String;

  constructor(private selicService: SelicService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.selicService.listarSelicAcumulado().subscribe(dados => this.selics = dados);
    this.titulo = "Selic Acumulado Anual";
  }

  listarFiltered(ano: String) {
    if (ano == "") {
      this.listar();
      this.media_selic = new Object;
    } else {
      this.selicService.listarMediaSelic(ano).subscribe(dados => this.media_selic = dados);
      this.selics = new Array;
      this.titulo = "Média do Ano " + ano;
    }
  }

}
