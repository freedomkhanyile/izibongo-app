import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { declarations, DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [...declarations]
})
export class DashboardModule { }
