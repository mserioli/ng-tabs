import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItemEvent } from '../models/menu-item-event.model';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  @Output() menuItemSelected: EventEmitter<MenuItemEvent> = new EventEmitter<MenuItemEvent>();

  constructor() { }


  ngOnInit() {
  }

  open(component: string) {
    this.menuItemSelected.emit({componentName: component, newTab: false } );
  }

  openNewTab(component: string) {
    this.menuItemSelected.emit({ componentName: component, newTab: true });
  }

}
