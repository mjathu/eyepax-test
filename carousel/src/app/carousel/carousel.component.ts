import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Slide } from './interfaces/carousel.interface';
import { CarouselService } from './services/carousel.service';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    animations: [
        trigger('carouselAnimation', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate('500ms', style({ opacity: 1 }))
            ]),
            transition('* => void', [
                animate('500ms', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class CarouselComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any>;

    @Input() slides: number = 1;
    @Input() infinite: boolean = false;
    @Input() title?: string;

    slideList: Slide[];
    presentSlide: number;

    constructor(
        private _carouselService: CarouselService
    ) {

        this._unsubscribeAll = new Subject();

        this.slideList = [];
        this.presentSlide = 0;

    }

    ngOnInit(): void {

        this._carouselService
            .getCarousels(this.slides).
            subscribe((res) => {
                this.slideList = [...res];

            });

    }

    ngOnDestroy(): void {
        // Close subscription
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    onPreviousClick(): void {
        const previous = this.presentSlide - 1;
        this.presentSlide = previous < 0 ? this.slideList.length - 1 : previous;
    }

    onNextClick(): void {
        const next = this.presentSlide + 1;
        this.presentSlide = next === this.slideList.length ? 0 : next;
    }

    checkPrevious(): boolean {
        if (this.infinite) {
            return true;
        } else {
            return this.presentSlide > 0;
        }
    }

    checkNext(): boolean {
        if (this.infinite) {
            return true;
        } else {
            return this.presentSlide < this.slideList.length -1;
        }
    }

}
