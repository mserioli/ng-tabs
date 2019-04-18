import { Component, ViewChild } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { Tab } from './tab-model';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(TabsComponent) tabsComponent;

  title = 'My Tour of Heroes';
  public selected = 1;

  items: Tab[] = [{
    label: 'Component1',
    component: HeroesComponent
  }, {
    label: 'Component2',
      component: HeroesComponent
  }
  ];


  addTab(): void {
    this.items.push({ label: 'Added', component: HeroesComponent});
  }

}
