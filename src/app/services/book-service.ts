import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Book } from '../model/books/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private readonly url = "https://cd-collection-server.herokuapp.com/books";

    constructor(private httpClient: HttpClient) { }

    getAllOwned(): Observable<Array<Book>> {
        return this.httpClient.get<Array<Book>>(this.url + "/owned");
    }

    getAllWanted(): Observable<Array<Book>> {
        return this.httpClient.get<Array<Book>>(this.url + "/wanted");
    }

    delete(id: number): void {
        this.httpClient.delete(this.url + "/" + id);
    }

    add(book: any): void {
        this.httpClient.post(this.url, book);
    }
}