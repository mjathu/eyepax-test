import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable()
export class CarouselService {

    apiBaseUrl = 'http://localhost';

    constructor(private _http: HttpClient) { }

    getCarousels(slides: number): Observable<any> {

        const params = new HttpParams().set('slides', slides);

        return this._http.get(`${environment.baseUrl}/carousel`, {params})
            .pipe(
                map((response: any) => {

                    const slides = response?.data?.slides ?? [];

                    return slides;

                }),
                shareReplay()
            );

    }

}
