import {AfterContentInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {finalize} from 'rxjs/operators';

import {QuoteService} from './quote.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    quote: string | undefined;
    isLoading = false;

    @ViewChild('imageA', {static: true}) imageA: ElementRef;
    // @ViewChild('imageB', {static: true}) imageB: ElementRef;

    constructor(private quoteService: QuoteService,
                private renderer: Renderer2) {
    }

    ngOnInit() {
        this.isLoading = false;
        // this.quoteService.getRandomQuote({ category: 'dev' })
        //   .pipe(finalize(() => { this.isLoading = false; }))
        //   .subscribe((quote: string) => { this.quote = quote; });

        // let imageDiv: ElementRef = this.renderer.createElement('div');
        // this.renderer.addClass(imageDiv, 'row');
        // this.renderer.addClass(imageDiv, 'h-100');
        // let image: ElementRef = this.renderer.createElement('img');
        // this.renderer.addClass(image, 'd-block');
        // this.renderer.addClass(image, 'w-100');
        // this.renderer.setProperty(image, 'src', 'http://localhost:3000/download/point_one/IMG_6891.jpeg');
        // this.renderer.appendChild(imageDiv, image);
    }
}
