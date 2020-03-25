import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared/ui/shared-components/shared-components.module';


@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ]
})
export class DashboardLayoutModule { }
