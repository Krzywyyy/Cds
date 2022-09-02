import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AdmService {
    private ADM_MODE = "AdmMode";

    constructor() { }

    becomeAdm() {
        localStorage.setItem(this.ADM_MODE, "SuperUser");
    }

    isAdm(): boolean {
        return localStorage.getItem(this.ADM_MODE) != null;
    }
}