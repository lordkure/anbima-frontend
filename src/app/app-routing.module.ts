import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MediaAcumuladoComponent } from './media-acumulado/media-acumulado.component';


const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'media-acumulado', component: MediaAcumuladoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
