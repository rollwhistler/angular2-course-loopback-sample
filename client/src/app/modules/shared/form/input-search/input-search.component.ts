import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  @Output() onItemUpdate:EventEmitter<string> = new EventEmitter<string>();
  private search_term = "";

  constructor() { }

  ngOnInit() {
  }

  update(value){
    this.onItemUpdate.emit(value);
  }

  keyUp($event){
    this.update($event.target.value);
  }
}
