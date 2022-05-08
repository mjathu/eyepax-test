import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselDisplayComponent } from './carousel-display.component';
import { Route, RouterModule } from '@angular/router';
import { CarouselModule } from '../carousel/carousel.module';

const routes: Route[] = [
    {
        path: '',
        component: CarouselDisplayComponent
    }
];

@NgModule({
    declarations: [
        CarouselDisplayComponent
    ],
    imports: [
        CommonModule,
        
        RouterModule.forChild(routes),

        CarouselModule
    ]
})
export class CarouselDisplayModule { }
