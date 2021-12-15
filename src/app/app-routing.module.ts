import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PagenotfoundComponent } from 
    './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  { path: 'home', component:PageAccueilComponent},
  { path: 'details', component:PageDetailsComponent},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
