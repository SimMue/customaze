import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaEntityComponent } from './meta-entity/meta-entity.component';

const routes: Routes = [
  { path: 'meta-entity', component: MetaEntityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
