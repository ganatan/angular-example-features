import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'testing',
    loadChildren: () => import('./example-testing/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  { path: '**', redirectTo: '/testing', pathMatch: 'full' }, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
