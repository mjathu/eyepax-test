import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { Route, RouterModule } from '@angular/router';
import { CarouselService } from './services/carousel.service';

@NgModule({
    declarations: [
        CarouselComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CarouselComponent
    ],
    providers: [CarouselService]
})
export class CarouselModule { }
