import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './components/tree/tree.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeComponent],
  exports: [TreeComponent]
})
export class TreeModule { }
