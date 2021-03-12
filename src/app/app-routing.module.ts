import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'cocktails', component:CocktailsComponent },
  { path: 'cocktails/', component:CocktailsComponent },
];

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: false
});