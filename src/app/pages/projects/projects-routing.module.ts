import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsLayoutComponent } from './layout/projects-layout/projects-layout.component';
import { WebsitesComponent } from './websites/websites.component';

const routes: Routes = [
      { path: '', component: ProjectsLayoutComponent, children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: ProjectsComponent },
          { path: 'websites', component: WebsitesComponent },
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
