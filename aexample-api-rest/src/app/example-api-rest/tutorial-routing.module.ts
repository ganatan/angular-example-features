import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: 'in-memory-web',
        loadChildren: () => import('./01-in-memory-web/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'in-memory-web-from-service',
        loadChildren: () => import('./02-in-memory-web-from-service/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'json-pretty',
        loadChildren: () => import('./03-json-pretty/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'genders',
        loadChildren: () => import('./11-genders/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'genders/:id',
        loadChildren: () => import('./12-genders-id/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'continents',
        loadChildren: () => import('./21-continents/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'continents/:id',
        loadChildren: () => import('./22-continents-id/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./31-countries/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'get-all',
        loadChildren: () => import('./71-get-all/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'get-all-one',
        loadChildren: () => import('./72-get-all-one/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'get-all-one-from-service',
        loadChildren: () => import('./73-get-all-one-from-service/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: '',
        redirectTo: '/api-rest/in-memory-web',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
