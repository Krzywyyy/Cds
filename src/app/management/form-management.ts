import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { BookFormComponent } from "./books-management/book-form/book-form.component";
import { CdFormComponent } from "./cds-management/cd-form/cd-form.component";

@Injectable({
    providedIn: 'root'
})
export class FormManagement {

    forms = {
        "cdForm": 0,
        "bookForm": 1,
    }
    dialogConfig: MatDialogConfig = new MatDialogConfig();

    constructor(private matDialog: MatDialog) {
    }

    showForm = (elementType: any, data?: any) => {
        if (data) {
            this.dialogConfig.data = data;
        }
        switch (elementType) {
            case this.forms.cdForm:
                return this.matDialog.open(CdFormComponent, this.dialogConfig);
            case this.forms.bookForm:
                return this.matDialog.open(BookFormComponent, this.dialogConfig);
            default:
                return;
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
