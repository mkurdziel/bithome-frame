import {Injectable} from '@angular/core';
import {ApiService} from '@app/services/api.service';
import {Media} from '@app/types/media';
import {Observable} from 'rxjs';
import {ApiEndpoints} from '@app/shared/api-endpoints';
import {map} from 'rxjs/operators';
import {Deserialize} from 'cerialize';


@Injectable({
    providedIn: 'root'
})
export class MediaService {

    constructor(private apiService: ApiService) {
    }

    public getRandomMedia(): Observable<Media> {
        return this.apiService.getRequest(ApiEndpoints.MEDIA_RANDOM())
            .pipe(map((response:any) => Deserialize(response, Media)));
    }
}
