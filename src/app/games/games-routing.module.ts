import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'mallaCurricular', component:MostrarMallaCurricularComponent},
  // {path:'crearPlanEstudio', component:CrearPlanEstudioComponent},
  // {path:'editarCurso/:id', component:EditarCursoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
