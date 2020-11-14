import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'api-rest',
    loadChildren: () => import('./example-api-rest/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  { path: '**', redirectTo: '/api-rest/in-memory-web', pathMatch: 'full' }, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
