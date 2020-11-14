import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive-form',
    loadChildren: () => import('./example-reactive-form/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  { path: '**', redirectTo: '/reactive-form/prototype', pathMatch: 'full' }, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
