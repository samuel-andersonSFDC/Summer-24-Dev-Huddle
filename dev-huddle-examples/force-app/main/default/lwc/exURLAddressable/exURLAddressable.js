import { LightningElement, wire, api } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import getFullName from '@salesforce/apex/DynamicFormulaExample.getFullName';

export default class exURLAddressable extends LightningElement {
    message;

    @wire(CurrentPageReference)
    currentPageRef;

    @api propertyValue;

    get propertyValue() {
        return this.currentPageRef.state.c__propertyValue;
    }

    @wire(getFullName)
    wiredDynamicFormulaExample({ error, data }) {
        if (data) {
            this.message = data;
        } else if (error) {
            this.message = 'Error retrieving message';
        }
    }
}