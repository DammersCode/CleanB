import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AboutmePage } from './pages/aboutme/aboutme.component';
import { MorePage } from './pages/more/more.component';
import { ContactPage } from './pages/contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomePage, AboutmePage, MorePage, ContactPage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
