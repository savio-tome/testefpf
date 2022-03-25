import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//components
import { HeaderComponent } from './mainpage/header/header.component';
import { SidenavComponent } from './mainpage/sidenav/sidenav.component'

//imports angular/material
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list'
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProjectcComponent } from './components/projectc/projectc.component';
import { HomeComponent } from './mainpage/home/home.component'
import {MatCardModule} from '@angular/material/card'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProjectcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
