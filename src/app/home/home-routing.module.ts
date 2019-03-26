import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index';
import { HomeNavComponent } from './home-nav';

const routes: Routes = [
  { path: '', component: IndexComponent }
];

export const declarations: Array<any> = [ HomeComponent, IndexComponent, HomeNavComponent ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
