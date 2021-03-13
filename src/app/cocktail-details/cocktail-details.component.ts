import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailDetailsService } from './cocktail-details.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail_name;
  public cocktails;
  constructor(private cocktailService: CocktailDetailsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cocktail_name = params.name;
      this.getCocktail(params.name);
    });
  }

  getCocktail(cocktail_name) {
    this.cocktailService.getCocktail(cocktail_name, (data: any) => {
      this.cocktails = data.drinks;
    }, (err) => {
      console.log(err.stack);
    })
  }


}
