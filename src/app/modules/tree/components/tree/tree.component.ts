import { TreeHelper } from './../../helpers/tree.helper';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TreeService } from '../../services/tree.service';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, AfterContentInit {
    private treeHelper = TreeHelper;

    constructor(
        private treeService: TreeService
    ) { }

    ngOnInit() {
        this.treeService.getNodes().subscribe((data) => {
            console.log(data);
        });
    }

    ngAfterContentInit() {
        const result = this.treeHelper.recursive(10);
        console.log(result);
    }

}
