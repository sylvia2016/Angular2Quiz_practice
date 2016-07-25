import { Component } from '@angular/core';
import {SelectComponent} from './select/index'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><app-select></app-select>',
    directives: [SelectComponent]

})
export class AppComponent { }
