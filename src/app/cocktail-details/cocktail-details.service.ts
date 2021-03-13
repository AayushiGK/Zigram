import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailDetailsService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCocktail(name, callback, errCallback) {
    this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name).subscribe((data) => {
      callback(data);
    }, err => {
      errCallback(err.stack);
    })
  }

}
