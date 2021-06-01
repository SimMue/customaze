import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaEntityDetailComponent } from './meta-entity/detail/meta-entity-detail.component';
import { MetaEntityComponent } from './meta-entity/meta-entity.component';

const routes: Routes = [
  { path: 'meta-entity', component: MetaEntityComponent },
  { path: 'meta-entity/detail', component: MetaEntityDetailComponent },
  { path: 'meta-entity/detail/:guid', component: MetaEntityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
