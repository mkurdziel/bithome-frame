import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiPath: string;
    private wsPath: string;

    constructor(private http: HttpClient) {
        // TODO: pull this from a global config
        this.apiPath = 'http://localhost:3000';
    }

    /**
     * Create an http get request
     * @param url
     */
    public getRequest(url: string): Observable<Object> {
        const observable = this.http.get(url, {})
            .pipe(
                retry(1),
                catchError(this.handleError)
            );

        return observable;
    }

    /**
     * Handle errors coming back from the http client
     * @param error
     */
    private handleError(error: any) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        //window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
