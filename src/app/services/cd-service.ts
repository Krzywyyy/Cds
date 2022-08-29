import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Cd } from '../model/cd';

@Injectable({
    providedIn: 'root'
})
export class CdService {
    private readonly url = "https://cd-collection-server.herokuapp.com/cds";

    constructor(private httpClient: HttpClient) { }

    getAllOwned(): Observable<Array<Cd>> {
        return this.httpClient.get<Array<Cd>>(this.url + "/owned");
    }

    getAllWanted(): Observable<Array<Cd>> {
        return this.httpClient.get<Array<Cd>>(this.url + "/wanted");
    }

    delete(id: number): void {
        this.httpClient.delete(this.url + "/" + id);
    }

    add(cd: any): void {
        this.httpClient.post(this.url, cd);
    }
}