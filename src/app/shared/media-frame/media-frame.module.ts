import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core';
import { MediaFrameComponent } from './media-frame.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [
        MediaFrameComponent
    ],
    declarations: [
        MediaFrameComponent
    ]
})
export class MediaFrameModule { }
