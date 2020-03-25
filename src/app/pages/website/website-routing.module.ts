import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {
    path: '', component: WebsiteLayoutComponent, children: [
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      { path: 'pages', component: PagesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
