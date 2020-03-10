import {Component, OnInit, Input, Inject, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {MediaService} from '@app/services/media.service';
import {Media} from '@app/types/media';
import {Observable, Subscription, timer} from 'rxjs';
import * as moment from 'moment';

@Component({
    selector: 'media-frame',
    templateUrl: './media-frame.component.html',
    styleUrls: ['./media-frame.component.scss']
})
export class MediaFrameComponent implements OnInit, OnDestroy {

    @Input() isLoading = false;
    @Input() message: string | undefined;

    private changeSubscription: Subscription;

    defaultImage: string = 'https://www.placecage.com/1000/1000';
    imageSourceA: String = null;
    imageSourceB: String = null;
    imageVisibleA: boolean = true;
    imageVisibleB: boolean = false;

    firstLoaded: boolean = false;

    constructor(private mediaService: MediaService,
                private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        const changeTimer = timer(0, 10000);
        this.changeSubscription = changeTimer.subscribe(() => {
            this.changeMedia();
        });
    }

    ngOnDestroy(): void {
        if (this.changeSubscription) {
            this.changeSubscription.unsubscribe();
        }
    }

    public imageOnLoad(imageA: boolean) {

        if (this.firstLoaded) {
            console.log((imageA ? 'Image A' : 'Image B' ) + ' on image load');
            // If image A is visible and B was now loaded, swap
            if (this.imageVisibleA && !imageA) {
                console.log('Showing image B');
                this.imageVisibleA = false;
                this.imageVisibleB = true;
            } else if (!this.imageVisibleA && imageA) {
                console.log('Showing image A');
                this.imageVisibleA = true;
                this.imageVisibleB = false;
            }
        } else if(!this.firstLoaded) {
            this.imageVisibleB = false;
        }

        this.firstLoaded = true;
        console.log('imageVisibleA: ' + this.imageVisibleA + ' imageVisibleB: ' + this.imageVisibleB);
        this.changeDetectorRef.detectChanges();
    }

    private changeMedia() {
        console.log('Changing media: ' + moment().toISOString());

        this.mediaService.getRandomMedia().subscribe(
            (media: Media) => {
                // If image A is visible, load B
                if (this.imageVisibleA && this.firstLoaded) {
                    console.log('Fetching new media for B: ' + media.url);
                    this.imageSourceB = media.url;
                } else {
                    console.log('Fetching new media for A: ' + media.url);
                    this.imageSourceA = media.url;
                }
            }
        );
    }


}
