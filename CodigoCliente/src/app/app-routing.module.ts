import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { SendDataComponent } from './send-data/send-data.component';

const routes: Routes = [
  {
    path: '',
    component: DataComponent
  },
  {
    path: 'senData',
    component: SendDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
