import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alert(){
    const alert = await this.alertCtrl.create({
      header: 'Meu Alert',
      subHeader: 'Atenção',
      message: 'Esse é meu primeiro alert',
      buttons: ['OK']
    });

    await alert.present();
  }

  async mutiple(){
    const muiltButtonsAlert = await this.alertCtrl.create({
      header: 'Vários botoes',
      subHeader: 'Atenção',
      message: 'Vários botões',
      buttons:['OK', 'Cancell']
    });

    await muiltButtonsAlert.present();
  }

  async confirma(){
    const confirmacao = await this.alertCtrl.create({
      header: 'Confirmação',
      message: 'Deseja realmente executar essa ação ? ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado: teste');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Ok confirmado');
          }
        }
      ]
    });

    await confirmacao.present();
  }

  async prompt(){
    const prompt = await this.alertCtrl.create({
      header: 'Prompt',
      inputs: [
        {
          name: 'login',
          type: 'text',
          placeholder: 'Login do usuário',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Digite a sua senha'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancell');
          }
        },
        {
          text: 'Ok',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });

    await prompt.present();
  }
}
