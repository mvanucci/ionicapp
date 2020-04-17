import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebservicePage } from './webservice.page';

const routes: Routes = [
  {
    path: '',
    component: WebservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebservicePageRoutingModule {}
