import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EasternComponent } from '../eastern/eastern/eastern.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
