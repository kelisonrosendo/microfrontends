import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMainComponent } from './components/angular-main.component'

const routes: Routes = [
  { path: 'angular-main', component: AngularMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
