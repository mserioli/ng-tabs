import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { EnemiesComponent } from '../enemies/enemies.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { Tab } from '../tab-model';
import { MenuItemEvent } from '../models/menu-item-event.model';

const COMPONENTS = { HeroesComponent, EnemiesComponent };

@Component({
  selector: 'app-multitab',
  templateUrl: './multitab.component.html',
  styleUrls: ['./multitab.component.css']
})
export class MultitabComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  @ViewChild(TabsComponent) tabsComponent: TabsComponent;

  @ViewChild(TabStripComponent) kendoTabsComponent: TabStripComponent;

  title = 'My Tour of Heroes';
  public selected = 1;

  items: Tab[] = [/*
    {
    label: 'Component1',
    component: HeroesComponent
  }, {
    label: 'Component2',
      component: HeroesComponent
  } */
  ];

  addTab(): void {
    this.items.push({ label: 'Added', component: HeroesComponent });
  }

  menuItemSelectd(event: MenuItemEvent): void {
    if (event.newTab === true) {
      this.tabsComponent.openTab(event.componentName, COMPONENTS[event.componentName], {}, true);
      //this.items.push({ label: event.componentName, component: COMPONENTS[event.componentName] });

    } else {
      this.tabsComponent.navigateCurrentTab(event.componentName, COMPONENTS[event.componentName]);
      //this.items.push({ label: event.componentName, component: COMPONENTS[event.componentName] });
    }
  }


}
