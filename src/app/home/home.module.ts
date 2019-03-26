import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { declarations, HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { HomeNavComponent } from './home-nav/home-nav.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [...declarations, IndexComponent, HomeNavComponent]
})
export class HomeModule { }
