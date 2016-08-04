import { Component } from '@angular/core';
import { SelectComponent } from './select/index'
import { ListComponent} from './list/index'

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
               <app-select (ESelected) = "doSelected($event)"></app-select>
               <app-list [selectedId]="selectedId"></app-list>`,
    directives: [SelectComponent, ListComponent]

})
export class AppComponent {

    selectedId: number;

    doSelected($event: any) {
        this.selectedId = $event;
        console.log('app - ' + this.selectedId);
    }
}
