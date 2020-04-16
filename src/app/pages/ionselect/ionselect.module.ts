import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonselectPageRoutingModule } from './ionselect-routing.module';

import { IonselectPage } from './ionselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonselectPageRoutingModule
  ],
  declarations: [IonselectPage]
})
export class IonselectPageModule {}
