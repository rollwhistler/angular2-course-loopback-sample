import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterItem } from './generic-filter.interfaces';

@Component({
  selector: 'app-generic-filter',
  templateUrl: './generic-filter.component.html',
  styleUrls: ['./generic-filter.component.scss']
})
export class GenericFilterComponent implements OnInit {

  @Input() items: FilterItem[];
  @Input() title: string;
  @Output() onItemUpdate: EventEmitter<FilterItem> = new EventEmitter<FilterItem>();
  @Output() onSearchUpdate: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onInputUpdate(value: string) {
    this.onSearchUpdate.emit(value);
  }

  onItemClicked(item: FilterItem) {
    this.onItemUpdate.emit(item);
  }
}
