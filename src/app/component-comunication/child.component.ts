import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {


  @Input() val1: string;
  @Input() val2: string;

  constructor() { }

  ngOnInit() {
    console.log('Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
