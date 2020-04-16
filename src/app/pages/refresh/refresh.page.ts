import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {

    console.log('Usuários solicitou a atualização');

    setTimeout(() => {
      console.log('Atualizado com sucesso.');
      event.target.complete();
    }, 2000);
  }
}
