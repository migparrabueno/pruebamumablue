import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoComponent } from './producto/producto.component';
import { RelacionadoComponent } from './relacionado/relacionado.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    FooterComponent,
    NavbarComponent,
    ProductoComponent,
    RelacionadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
