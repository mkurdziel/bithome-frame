import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import {CarouselComponent} from 'angular-bootstrap-md';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string | undefined;
  isLoading = false;

  @ViewChild('carousel', {static: true}) carousel: CarouselComponent;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = false;
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
    //   .subscribe((quote: string) => { this.quote = quote; });
      console.log(this.carousel);

  }
}
