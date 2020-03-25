import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'moonshot-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  opened = false;
  @ViewChild('sidenav', { static: true }) sidenav;
  @ViewChild('main', { static: true }) main;

  menuDataSource = {
    main: { title: 'Home', icon: 'pi pi-home', link: '' },
    groups: [
    {
      name: 'Website',
      data: [
        { title: 'Pages', icon: 'pi pi-list', link: 'website' },
        { title: 'Sitemap', icon: 'pi pi-sitemap', link: '/home/project' },
        { title: 'Editor', icon: 'pi pi-pencil', link: '/home/project/websites' },
      ]
    },
    {
      name: 'Settings',
      data: [
        { title: 'General', icon: 'pi pi-cog', link: 'websiteq' },
        { title: 'SEO', icon: 'pi pi-android', link: 'websiteq' },
        { title: 'Redirect', icon: 'pi pi-arrow-circle-right', link: 'websiteq' },
      ]
    },
    {
      name: 'Quality',
      data: [
        { title: 'Reports', icon: 'pi pi-home', link: 'websiteq' },
        { title: 'Sources', icon: 'pi pi-home', link: 'websiteq' },
        { title: 'Finance', icon: 'pi pi-home', link: 'websiteq' },
      ]
    },
      {
        name: 'CRM',
        data: [
          { title: 'Providers', icon: 'pi pi-home', link: 'websiteq' },
        ]
      }
  ]
}

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.sidenav.nativeElement.style.width = "230px";
    this.main.nativeElement.style.marginLeft = "230px";
    // this.main.nativeElement.style.width = "calc(100% - 290px)";
    this.opened = true;
  }

  closeNav() {
    this.sidenav.nativeElement.style.width = "65px";
    this.main.nativeElement.style.marginLeft = "65px";
    // this.main.nativeElement.style.width = "calc(100% - 60px)";
    this.opened = false;
  }

}
