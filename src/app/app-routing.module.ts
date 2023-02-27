import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NextPageComponent} from './next-page/next-page.component';

const routes: Routes = [
  {
    path: 'show',
    component: NextPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
