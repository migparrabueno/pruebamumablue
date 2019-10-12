import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [
  {path: '', redirectTo: 'catalogo', pathMatch: 'full'},
  {path:'catalogo', component: CatalogoComponent},
  {path:'producto/:id', component: ProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
