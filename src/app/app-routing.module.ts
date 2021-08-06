import { SavedComponent } from './saved/saved/saved.component';
import { PlayersComponent } from './players/players/players.component';
import { EasternComponent } from './eastern/eastern/eastern.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'eastern', component: EasternComponent
  },
  {
    path: 'players', component: PlayersComponent
  },
  {
    path: 'saved', component: SavedComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
