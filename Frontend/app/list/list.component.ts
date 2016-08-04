import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
    modifyID: string;
    aryFoodById: any[];
    @Input() selectedId: string;
    beHidden: boolean = true;

    constructor(private common: CommonService) {}

    ngOnInit() {    
        this.getFoodById();    
    }

    ngOnChanges() {
        this.getFoodById();
    }

    getFoodById() {
        if (this.selectedId == 'all'){
            this.common.getFood()
                .subscribe((value: any) => {
                    this.aryFoodById = value;
                })
        }
        else {
            this.common.getFoodById(this.selectedId)
                .subscribe((value: any) => {
                    this.aryFoodById = [value];
                    //this.aryFoodById.push(value);  --> ?
                })
        }
    }

    //wantModify(id: string) {
    //    this.showUpdate = !this.showUpdate;
    //    this.selectedId = id;
    //}

    wantModify(id: string) {
        this.modifyID = id;
        this.beHidden = !this.beHidden;
    }

    //checkedit(id: string) {
    //    if (this.selectedId == id)
    //        return true;
    //    else
    //        return false;
    //}

    updateFood(updateId: string, updateName: string, updatePrice: string) {
        var obj = { Id: updateId, Name: updateName, Price: updatePrice };
        this.common.updateFood(updateId, obj)
            .subscribe(
            (data: any) => { },
            (err: any) => { alert(err._body); },
            () => {
                alert('н╫зяжие\бI');
                this.getFoodById();
            }
        );
    }


    deleteFood(updateId: string, updateName: string) {
        console.log(updateId + ' / ' + updateName);
    }
}
