import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.page.html',
  styleUrls: ['./toogle.page.scss'],
})
export class TooglePage implements OnInit {
  marcado :boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
