import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {
  menuCollection: any[] = [];
  constructor(private navCtrl: NavController) {
    this.menuCollection = [
      {
        title: 'Navegação',
        url: 'navegacao',
        icon: 'mail'
      },
      {
        title: 'Botões',
        url: 'botao',
        icon: 'construct'
      },
      {
        title: 'Alert',
        url: 'alert',
        icon: 'albums'
      },
      {
        title: 'Action-Sheet',
        url: 'actionsheet',
        icon: 'walk'
      },
      {
        title: 'Badge',
        url: 'badge',
        icon: 'pricetag'
      },
      {
        title: 'Card',
        url: 'card',
        icon: 'card'
      },
      {
        title: 'Checkbox',
        url: 'checkbox',
        icon: 'checkbox'
      },
      {
        title: 'Chip',
        url: 'chip',
        icon: 'hardware-chip'
      },
      {
        title: 'Content Sroll',
        url: 'content',
        icon: 'albums'
      },
      {
        title: 'Date Time',
        url: 'datetime',
        icon: 'calendar'
      },
      {
        title: 'Fab',
        url: 'fab',
        icon: 'radio'
      },
      {
        title: 'Inputs',
        url: 'inputs',
        icon: 'clipboard'
      },
      {
        title: 'Infinity Scroll',
        url: 'infinityscroll',
        icon: 'list'
      },
      {
        title: 'Ion List',
        url: 'list',
        icon: 'list'
      },
      {
        title: 'Progress Bar',
        url: 'progressbar',
        icon: 'battery-charging'
      },
      {
        title: 'Refresh sher',
        url: 'refresh',
        icon: 'battery-charging'
      },
      {
        title: 'Re-Order',
        url: 'reorder',
        icon: 'battery-charging'
      },
      {
        title: 'Ion Select',
        url: 'ionselect',
        icon: 'battery-charging'
      },
      {
        title: 'Toogle',
        url: 'toogle',
        icon: 'battery-charging'
      },
      {
        title: 'Search Bar',
        url: 'searchbar',
        icon: 'search'
      },
      {
        title: 'Componente Segment',
        url: 'segment',
        icon: 'search'
      },
      {
        title: 'Componente Slide',
        url: 'slide',
        icon: 'search'
      },
      {
        title: 'Componente toast Notification',
        url: 'toast',
        icon: 'search'
      },
      {
        title: 'Componente Modal',
        url: 'modal',
        icon: 'toggle'
      },
      {
        title: 'Componente Popover',
        url: 'popover',
        icon: 'toggle'
      },
      {
        title: 'Radio Component',
        url: 'radio',
        icon: 'toggle'
      },
      {
        title: 'Animações',
        url: 'animacao',
        icon: 'toggle'
      }
    ];
  }

  ngOnInit() {
  }

  showPage(url: string){
    this.navCtrl.navigateForward(url);
  }
}
