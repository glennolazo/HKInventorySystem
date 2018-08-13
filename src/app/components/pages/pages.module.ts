import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { Page400Component } from './page400/page400.component';
import { Page500Component } from './page500/page500.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  declarations: [
    Page400Component,
    Page500Component,
    NotFoundComponent
  ]
})
export class PagesModule { }
