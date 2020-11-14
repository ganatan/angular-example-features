import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./example-template-driven-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  { path: '**', redirectTo: '/template-driven-forms/single', pathMatch: 'full' }, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
