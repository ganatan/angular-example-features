import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';

import { PrettyPrintPipe } from './pretty-print.pipe';
import { PrettyjsonPipe } from './pretty-json.pipe';

@NgModule({
  declarations: [
    ExerciceComponent,
    PrettyPrintPipe,
    PrettyjsonPipe
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    HttpClientModule
  ],
  exports: [ExerciceComponent],
})
export class ExerciceModule { }
