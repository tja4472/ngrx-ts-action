import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterUsingActionCreatorComponent } from './counter-using-action-creator/counter-using-action-creator.component';
import { CounterUsingClassesComponent } from './counter-using-classes/counter-using-classes.component';
import { CounterUsingTsActionComponent } from './counter-using-ts-action/counter-using-ts-action.component';

const routes: Routes = [
  {
    path: 'counter-using-action-creator',
    component: CounterUsingActionCreatorComponent,
  },
  { path: 'counter-using-classes', component: CounterUsingClassesComponent },
  { path: 'counter-using-ts-action', component: CounterUsingTsActionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
