import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInfoComponent } from './game-info/game-info.component';

const routes: Routes = [
  { path: 'game', component: GameInfoComponent },
  // {path:'crearPlanEstudio', component:CrearPlanEstudioComponent},
  // {path:'editarCurso/:id', component:EditarCursoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
