import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppStartComponent } from './app-start/app-start.component';

const routes: Routes = [
  { path: 'home', component: AppStartComponent },
  { path: 'posts' ,  
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
