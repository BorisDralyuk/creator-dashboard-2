import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
//import { MultiSelect } from 'primeng/multiselect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MenubarModule,
    DropdownModule,
    AutoCompleteModule,
    TieredMenuModule,
    OverlayPanelModule,
    ButtonModule,
    BreadcrumbModule,
    TableModule,
    InputTextModule,
    SliderModule,
   // MultiSelect,
  ],
  exports: [
    FormsModule,
    MenubarModule,
    DropdownModule,
    AutoCompleteModule,
    TieredMenuModule,
    OverlayPanelModule,
    ButtonModule,
    BreadcrumbModule,
    TableModule,
    InputTextModule,
    SliderModule,
    //MultiSelect,
  ]
})
export class PrimengModule { }
