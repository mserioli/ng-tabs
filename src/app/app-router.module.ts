import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './component-comunication/parent.component';
import { MultitabComponent } from './multitab/multitab.component';


const routes: Routes = [
  { path: '', redirectTo: '/tabs', pathMatch: 'full' },
  { path: 'tabs', component: MultitabComponent },
  { path: 'communication', component: ParentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
