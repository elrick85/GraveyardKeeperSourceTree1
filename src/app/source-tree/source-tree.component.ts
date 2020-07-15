import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {SOURCE_TOOLS, SOURCE_TOOLS_TREE, SourceItem} from '../../sourceTools';


@Component({
  selector: 'app-source-tree',
  templateUrl: './source-tree.component.html',
  styleUrls: ['./source-tree.component.css']
})
export class SourceTreeComponent implements OnInit {

  treeControl = new NestedTreeControl<SourceItem>(node => node.items);
  dataSource = new MatTreeNestedDataSource<SourceItem>();

  constructor() {
    this.dataSource.data = SOURCE_TOOLS_TREE;
  }

  hasChild = (_: number, node: SourceItem) => !!node.items && node.items.length > 0;

  ngOnInit(): void {}

}
