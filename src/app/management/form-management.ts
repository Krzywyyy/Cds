import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CdFormComponent } from "./cds-management/cd-form/cd-form.component";

@Injectable({
    providedIn: 'root'
})
export class FormManagement {

    forms = {
        "cdForm": 0
    }

    constructor(private matDialog: MatDialog) {
    }

    showForm = (elementType: any) => {
        switch (elementType) {
            case this.forms.cdForm:
                return this.matDialog.open(CdFormComponent);
            default:
                return null;
        }
    }

    getCheckedCheckboxes(): Array<HTMLInputElement> {
        return Array.from(this.getAllCheckboxes())
            .filter(c => c.checked)
    }

    updateMainCheckbox() {
        this.getMainCheckbox().checked = Array.from(this.getAllCheckboxes())
            .every(c => c.checked);
    }

    private getMainCheckbox(): HTMLInputElement {
        return document.getElementById('mainCheckbox') as HTMLInputElement;
    }

    private getAllCheckboxes(): NodeListOf<HTMLInputElement> {
        return document.getElementsByName('single-element-checkbox') as NodeListOf<HTMLInputElement>;
    }

    applyToAllCheckboxes = (target: any) => {
        var checked = (target as HTMLInputElement).checked

        var checkboxes = this.getAllCheckboxes();

        checkboxes.forEach((item) => {
            item.checked = checked;
        })
    }

    anythingChecked(): boolean {
        return Array.from(this.getAllCheckboxes()).some(c => c.checked)
    }

    refreshPage = () => {
        window.location.reload();
    }
}
