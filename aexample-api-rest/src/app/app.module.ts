import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './header/header.module';
import { FeaturesModule } from './features/features.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FeaturesModule,
  ],
  providers: [
//    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
