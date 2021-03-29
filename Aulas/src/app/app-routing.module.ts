import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { HomeComponent } from './home/home.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home",component: HomeComponent },
  {path:"calculadora", component: CalculadoraComponent},
  {path:"ReadMeGenerator", component: ReadMeGeneratorComponent},
  {path:"Exeperiments", component: ExperimentsComponent},
  {path:"Eventos", component:EvAndRefComponent},
  {path:"Veterinario", component:VeterinarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
