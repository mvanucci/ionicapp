import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebservicePageRoutingModule } from './webservice-routing.module';

import { WebservicePage } from './webservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebservicePageRoutingModule
  ],
  declarations: [WebservicePage]
})
export class WebservicePageModule {}
