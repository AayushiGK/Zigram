import { Component, OnInit } from '@angular/core';
import { CocktailsService } from './cocktails.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  public cocktails;
  public searchText: string;
  public p: any;
  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails() {
    this.cocktailsService.getCocktails((data: any) => {
      this.cocktails = data.drinks;
      console.log('cocktails ',this.cocktails)
    }, (err) => {
      console.log(err.stack);
    })
  }

}
