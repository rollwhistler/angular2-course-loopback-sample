import { Component, OnInit, Input } from '@angular/core';
import { GenericItem } from './generic-list.interfaces';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {

  @Input() items: GenericItem[];

  constructor() { }

  ngOnInit() {
  }

}
