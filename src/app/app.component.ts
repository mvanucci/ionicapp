import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
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
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
