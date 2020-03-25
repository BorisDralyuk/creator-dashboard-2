import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { AccountComponent } from './account/account.component';
import { NotificationComponent } from './notification/notification.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { PagesTableComponent } from './pages-table/pages-table.component';




@NgModule({
  declarations: [
    LogoComponent, 
    AutocompleteComponent, 
    AccountComponent,
    NotificationComponent,
    BreadCrumbComponent,
    PagesTableComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule
  ], 
  exports: [
    LogoComponent, 
    AutocompleteComponent,
    AccountComponent,
    NotificationComponent,
    BreadCrumbComponent,
    PagesTableComponent,
  ]
})
export class SharedComponentsModule { }
