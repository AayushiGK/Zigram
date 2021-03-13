import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailsComponent } from './cocktails/cocktails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'cocktails', component:CocktailsComponent },
  { path: 'cocktails/:name', component:CocktailDetailsComponent },
];

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: false
});