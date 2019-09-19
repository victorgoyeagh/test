import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TreeService {
    private treeDataUrl = environment.treeDataUrl;

    constructor(
        private http: HttpClient
    ) { }


    getNodes() {
       return this.http.get(this.treeDataUrl);
    }

}
