import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleChartsModule } from './example-charts/example-charts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
