import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DcRoutingModule } from './dc-routing.module';
import { DcComponent } from './dc.component';
import { WelcomeDcCardComponent } from './components/welcome-dc-card/welcome-dc-card.component';


@NgModule({
  declarations: [
    DcComponent,
    WelcomeDcCardComponent
  ],
  imports: [
    CommonModule,
    DcRoutingModule,
  ]
})
export class DcModule { }
