import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInternoComponent } from 'src/app/components/popover-interno/popover-interno.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPopover(event: any){
    let popover = await this.popoverCtrl.create({
      component:PopoverInternoComponent,
      event: event,
      translucent: true
    });

    return await popover.present();
  }
}
