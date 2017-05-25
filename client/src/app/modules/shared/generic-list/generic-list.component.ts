import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GenericItem } from './generic-list.interfaces';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {

  @Input() items: GenericItem[];
  @Output() onNameChanged: EventEmitter<{newName: string, item: GenericItem}> = new EventEmitter<{newName: string, item: GenericItem}>();
  constructor() { }

  ngOnInit() {
  }

  nameChanged(newName: string, item: GenericItem) {
    this.onNameChanged.emit({
      newName,
      item
    });
  }

}
