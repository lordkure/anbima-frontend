import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { MediaAcumuladoComponent } from './media-acumulado/media-acumulado.component';
import { SelicService } from './selic.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MediaAcumuladoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SelicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
