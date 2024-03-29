import { Component, OnInit } from "@angular/core";
import { Cd } from "src/app/model/cds/cd";
import { CdListFilters } from "src/app/model/cds/cd-list-filters";
import { CdListSorts } from "src/app/model/cds/cd-list-sorts";
import { AdmService } from "src/app/services/adm-service";
import { CdService } from "src/app/services/cd-service";
import { FormManagement } from "../form-management";

@Component({
    template: ''
})
export abstract class CdManagement implements OnInit {

    cds: Array<Cd> = new Array();

    cdFilters = new CdListFilters();
    cdSorts = new CdListSorts();

    constructor(
        public formManagement: FormManagement,
        public cdService: CdService,
        public admService: AdmService
    ) { }

    ngOnInit(): void {
        this.refreshElements();
    }

    getCdsToDisplay(): Array<Cd> {
        return this.sorted(this.cds
            .filter(record => record.band.toLowerCase().includes(this.cdFilters.band.toLowerCase()))
            .filter(record => record.album.toLowerCase().includes(this.cdFilters.album.toLowerCase()))
            .filter(record => this.cdFilters.yearFrom ? this.cdFilters.yearFrom <= record.year : true)
            .filter(record => this.cdFilters.yearTo ? record.year <= this.cdFilters.yearTo : true)
            .filter(record => record.genre.toLowerCase().includes(this.cdFilters.genre.toLowerCase())));
    }

    resetFilters() {
        this.cdFilters = new CdListFilters();
    }

    sorted(cdList: Array<Cd>): Array<Cd> {
        var list: Array<Cd> = [];

        switch (this.cdSorts.column) {
            case 'band':
                list = cdList.sort((cd1, cd2) => cd1.band.localeCompare(cd2.band));
                break;
            case 'album':
                list = cdList.sort((cd1, cd2) => cd1.album.localeCompare(cd2.album));
                break;
            case 'year':
                list = cdList.sort((cd1, cd2) => cd1.year - cd2.year);
                break;
            case 'genre':
                list = cdList.sort((cd1, cd2) => cd1.genre.localeCompare(cd2.genre));
                break;
            default:
                list = cdList;
                break;
        }
        return this.cdSorts.ascending === "ascending" ? cdList : cdList.reverse();
    }

    addElement() {
        this.formManagement.showForm(this.formManagement.forms.cdForm)?.afterClosed()
            .subscribe(() => this.refreshElementsAfterUpdate());
    }

    editElement(cd: any) {
        this.formManagement.showForm(this.formManagement.forms.cdForm, cd)?.afterClosed()
            .subscribe(() => this.refreshElementsAfterUpdate());
    }

    uploadFileButton() {
        document.getElementById("uploadFileInput")?.click();
    }

    uploadFile(event: any) {
        let file = event.srcElement.files.item(0);
        if (!file) {
            return;
        }
        this.cdService.uploadFile(file);
        this.refreshElementsAfterUpdate();
    }

    abstract refreshElements(): void;

    deleteCheckedElements() {
        if (!confirm("Jesteś pewny/a?")) {
            return;
        }
        Array.from(document.getElementsByTagName("tr"))
            .map(row => row.getElementsByTagName("td"))
            .filter(row => (row[0].childNodes[0] as HTMLInputElement).checked)
            .map(row => row[1].childNodes[0].textContent)
            .forEach(cdId => this.cdService.delete(cdId));
        this.refreshElementsAfterUpdate();
    }

    deleteElement(id: any) {
        if (confirm("Jesteś pewny/a?")) {
            return;
        }
        this.cdService.delete(id);
        this.refreshElementsAfterUpdate();
    }

    refreshElementsAfterUpdate() {
        setTimeout(() => this.refreshElements(), 1000);
    }
}
