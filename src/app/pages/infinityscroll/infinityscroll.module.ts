import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinityscrollPageRoutingModule } from './infinityscroll-routing.module';

import { InfinityscrollPage } from './infinityscroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinityscrollPageRoutingModule
  ],
  declarations: [InfinityscrollPage]
})
export class InfinityscrollPageModule {}
