import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponentsModule } from 'src/app/shared/ui/shared-components/shared-components.module';


@NgModule({
  declarations: [ WebsiteLayoutComponent, PagesComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedComponentsModule
  ]
})
export class WebsiteModule { }
