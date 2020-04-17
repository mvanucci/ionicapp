import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.page.html',
  styleUrls: ['./text-to-speech.page.scss'],
})
export class TextToSpeechPage implements OnInit {

  textoASerFalado: string = "Olá mundo";
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }

  falar() {
    this.tts.speak({
      text: this.textoASerFalado,
      locale: 'pt-BR',
      rate: 1.00
    }).then(()=>{
      alert('Falou com sucesso!');
    }).catch((err:any) => {
      alert(err);
    });
  }
}
