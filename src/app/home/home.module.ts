import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MediaFrameModule} from '@app/shared/media-frame/media-frame.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CoreModule,
        SharedModule,
        HomeRoutingModule,
        MediaFrameModule
    ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
