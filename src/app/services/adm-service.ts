import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AdmService {
    private ADM_MODE = "AdmMode";

    constructor() { }

    becomeAdm() {
        sessionStorage.setItem(this.ADM_MODE, "");
    }

    isAdm(): boolean {
        return sessionStorage.getItem(this.ADM_MODE) != null;
    }
}