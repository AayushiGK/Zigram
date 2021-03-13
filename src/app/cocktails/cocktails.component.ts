import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { CocktailsService } from './cocktails.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  public cocktails;
  public uniqueCategory;
  public uniqueName;
  public uniqueGlass;
  public uniqueIsAlcoholic;
  public searchText: string;
  public p: any;
  sortedData: any[];
  filterControl = new FormControl();
  filterGroups: any[] = [
    { name: 'Category', cocktail: [] },
    { name: 'If Alcoholic', cocktail: [] },
    { name: 'Glass', cocktail: [] },
    { name: 'Name', cocktail: [] }
  ];

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails() {
    this.cocktailsService.getCocktailFilter("search.php?f=a", (data: any) => {
      this.cocktails = data.drinks;

      this.uniqueCategory = [...new Set(this.cocktails.map(item => item.strCategory))];
      this.uniqueIsAlcoholic = [...new Set(this.cocktails.map(item => item.strAlcoholic))];
      this.uniqueGlass = [...new Set(this.cocktails.map(item => item.strGlass))];
      this.uniqueName = [...new Set(this.cocktails.map(item => item.strDrink))];

      this.filterGroups[0].cocktail = this.uniqueCategory;
      this.filterGroups[1].cocktail = this.uniqueIsAlcoholic;
      this.filterGroups[2].cocktail = this.uniqueGlass;
      this.filterGroups[3].cocktail = this.uniqueName;

    }, (err) => {
      console.log(err.stack);
    })
  }

  removeFilter() {
    this.getCocktails();
  }

  clickedValue() {
    let clickedValue = this.filterControl.value;
    if (this.uniqueCategory.indexOf(clickedValue) > -1) {
      this.cocktailsService.getCocktailFilter("filter.php?c=" + (clickedValue).replaceAll(" ", "_"), data => {
        this.cocktails = data.drinks;
      }, err => {
        console.log(err);
      })
    }
    if (this.uniqueIsAlcoholic.indexOf(clickedValue) > -1) {
      this.cocktailsService.getCocktailFilter("filter.php?a=" + (clickedValue).replaceAll(" ", "_"), data => {
        this.cocktails = data.drinks;
      }, err => {
        console.log(err);
      })
    }
    if (this.uniqueGlass.indexOf(clickedValue) > -1) {
      this.cocktailsService.getCocktailFilter("filter.php?g=" + (clickedValue).replaceAll(" ", "_"), data => {
        this.cocktails = data.drinks;
      }, err => {
        console.log(err);
      })
    }
    if (this.uniqueName.indexOf(clickedValue) > -1) {
      this.cocktailsService.getCocktailFilter("search.php?s=" + (clickedValue).replaceAll(" ", "_"), data => {
        this.cocktails = data.drinks;
      }, err => {
        console.log(err);
      })
    }
  }

  sortData(sort: Sort) {
    const data = this.cocktails.slice();
    if (!sort.active || sort.direction === '') {
      this.cocktails = data;
      return;
    }

    this.cocktails = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'strDrink': return compare(a.strDrink, b.strDrink, isAsc);
        case 'strCategory': return compare(a.strCategory, b.strCategory, isAsc);
        case 'strAlcoholic': return compare(a.strAlcoholic, b.strAlcoholic, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}