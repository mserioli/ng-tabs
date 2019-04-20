import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentComunicationModule { }
