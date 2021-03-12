import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  public readonly Base_API = "https://www.thecocktaildb.com/api/json/v1/1/"; 
}
