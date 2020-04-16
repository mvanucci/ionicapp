import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinityscrollPage } from './infinityscroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinityscrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinityscrollPageRoutingModule {}
