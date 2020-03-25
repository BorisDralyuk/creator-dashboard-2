import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { SharedComponentsModule } from 'src/app/shared/ui/shared-components/shared-components.module';



@NgModule({
  declarations: [HomeLayoutComponent, HomeHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ]
})
export class HomeLayoutModule { }
