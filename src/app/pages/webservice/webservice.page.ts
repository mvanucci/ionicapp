import { CepService } from './../../services/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.page.html',
  styleUrls: ['./webservice.page.scss'],
})
export class WebservicePage implements OnInit {

  cep: string = ''
  retorno: any = { cep: '', logradouro: '' };
  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  consultarCEP() {
    this.cepService.obterEndereco(this.cep).then( json =>{
      this.retorno = json;
    }).catch(erro => {
      alert('Não foi possível realizar a consulta');
    });
  }
}
