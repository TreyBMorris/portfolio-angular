import { Routes, RouterModule, LocationStrategy, HashLocationStrategy } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }