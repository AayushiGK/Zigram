import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular-6-datatable';

@NgModule({
  declarations: [],
  schemas:[NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    DataTableModule
  ]
})
export class CocktailDetailsModule { }
