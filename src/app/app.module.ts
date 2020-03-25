import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutModule } from './layouts/home-layout';
import { DashboardLayoutModule } from './layouts/dashboard-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeLayoutModule,
    DashboardLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
