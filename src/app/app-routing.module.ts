import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout';
import { DashboardLayoutComponent } from './layouts/dashboard-layout';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', component: HomeLayoutComponent, children: [
        { path: '', redirectTo: 'project', pathMatch: 'full' },
        { path: 'project', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
        { path: 'dashboard', component: DashboardLayoutComponent, children: [
          { path: '', redirectTo: 'website', pathMatch: 'full' },
          { path: 'website', loadChildren: () => import('./pages/website/website.module').then(m => m.WebsiteModule) }
          ]
        }
     ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
