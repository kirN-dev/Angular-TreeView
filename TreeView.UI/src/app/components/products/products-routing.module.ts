import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLevelThreeOneComponent } from './product-level-three-one/product-level-three-one.component';
import { ProductLevelThreeTwoComponent } from './product-level-three-two/product-level-three-two.component';

const routes: Routes = [
  {
    path: 'level1.2.1',
    component: ProductLevelThreeOneComponent,
  },
  {
    path: 'level1.2.2',
    component: ProductLevelThreeTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
