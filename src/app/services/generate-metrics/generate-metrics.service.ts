import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiHttpService } from '../api-http.service';
import { AnchoringScore } from 'src/app/models/anchoring-score';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GenerateMetricsService {
    constructor(private http: HttpClient) { }

    getCSVData(url: string) {
        return this.http.get(url).
            pipe(
               map((data: AnchoringScore[]) => {
                 return data;
               }), catchError( error => {
                 return throwError( 'Something went wrong!' );
               })
            )
        }
    }
