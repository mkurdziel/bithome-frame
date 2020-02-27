import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import {CarouselModule} from 'angular-bootstrap-md';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CoreModule,
        SharedModule,
        HomeRoutingModule,
        CarouselModule
    ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
