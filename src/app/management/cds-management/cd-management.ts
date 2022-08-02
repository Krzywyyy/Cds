import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Cd } from "src/app/model/cd";
import { CdListFilters } from "src/app/model/cd-list-filters";
import { CdListSorts } from "src/app/model/cd-list-sorts";
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
        private cdr: ChangeDetectorRef
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

    abstract refreshElements(): void;

    // refreshElements() {
    //     this.cdService.getAllOwned()
    //         .subscribe(data => this.cds = data);
    // }

    addElement() {
        let dialogRef = this.formManagement.showForm(this.formManagement.forms.cdForm);

        dialogRef?.afterClosed().subscribe(() => {
            this.cds.push({
                id: 6,
                band: "Behemoth",
                album: "Ov fire and the void",
                year: 2015,
                genre: "black metal"
            });
        })
    }

    editElement(cd: any) {
        window.alert("Edytuj: " + cd)
    }

    deleteCheckedElements() {
        if (!confirm("Jesteś pewny/a?")) {
            return;
        }
        Array.from(document.getElementsByTagName("tr"))
            .map(row => row.getElementsByTagName("td"))
            .filter(row => (row[0].childNodes[0] as HTMLInputElement).checked)
            .map(row => row[1].childNodes[0].textContent)
            .forEach(cdId => this.deleteElement(cdId, true));
        this.cdr.detectChanges()
    }

    deleteElement(id: any, auto: boolean) {
        if (auto || confirm("Jesteś pewny/a?")) {
            this.cds = this.cds.filter(obj => obj.id !== id);
        }
    }
}
