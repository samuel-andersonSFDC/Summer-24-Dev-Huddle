import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

const CMP_NAME = "c__exURLAddressable"

export default class exURLAddressableNav extends NavigationMixin(LightningElement) {

    navigateToComponent() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: CMP_NAME,
            },
            state: {
                c__propertyValue: 'Hello World',
            },
        });
    }
}