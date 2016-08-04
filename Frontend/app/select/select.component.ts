import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  moduleId: module.id,
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css']
})
export class SelectComponent implements OnInit {

    selectedId: number = 1;

    @Output()
    ESelected = new EventEmitter<string>();  //µù¥U¨Æ¥ó

    constructor(private common: CommonService) {
        //this.doselect();
        //this.common.selectedId = this.selectedId;
        }

  ngOnInit() {
      this.getAllFood();
  }

  aryFood: any[];
  getAllFood() {
      this.common.getFood()
          .subscribe((value: any) => {
              this.aryFood = value;
          })
  }

  doselect() {
      //this.common.selectedId = this.selectedId;
      this.ESelected.emit(this.selectedId.toString());
  }

}
