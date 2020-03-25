import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsLayoutComponent } from './layout/projects-layout/projects-layout.component';
import { WebsitesComponent } from './websites/websites.component';
import { PrimengModule } from '../../shared/modules/primeng/primeng.module';


@NgModule({
  declarations: [ProjectsComponent, ProjectsLayoutComponent, WebsitesComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    PrimengModule
  ],
  providers: []
})
export class ProjectsModule { }
