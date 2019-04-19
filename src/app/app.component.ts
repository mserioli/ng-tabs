import { Component, ViewChild } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { Tab } from './tab-model';
import { TabsComponent } from './tabs/tabs.component';
import { MenuItemEvent } from './models/menu-item-event.model';
import { EnemiesComponent } from './enemies/enemies.component';
import { TabStripComponent } from '@progress/kendo-angular-layout';


const COMPONENTS = {HeroesComponent, EnemiesComponent};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
