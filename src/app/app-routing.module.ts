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
    path: 'jungle',
    loadChildren: () => import('./jungle/jungle.module').then( m => m.JunglePageModule)
  },
  {
    path: 'carry',
    loadChildren: () => import('./carry/carry.module').then( m => m.CarryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'mage',
    loadChildren: () => import('./mage/mage.module').then( m => m.MagePageModule)
  },
  {
    path: 'offlane',
    loadChildren: () => import('./offlane/offlane.module').then( m => m.OfflanePageModule)
  },
  {
    path: 'rome',
    loadChildren: () => import('./rome/rome.module').then( m => m.RomePageModule)
  },
  {
    path: 'comment-add',
    loadChildren: () => import('./comment-add/comment-add.module').then( m => m.CommentAddPageModule)
  },
  {
    path: 'edit/:d1',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
