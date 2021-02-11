import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs/operators"
import { Recipe } from "src/app/models/recipe"
import { Observable } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class ServeRecipeService {
recipe: Recipe 

  constructor(private _http:HttpClient) { }

baseUrl="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  getAllReceipe(){

    return this._http.get<any[]>(this.baseUrl).pipe(
      map(reponse=>reponse)
      
      )
    
  }

  getSingleReceipe(id: any){
   
    return this._http.get<any>("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id).pipe(
      map(reponse=>reponse)
      
      )
     
  } 

  getReceipeByLetter(a:any){

    return this._http.get<any[]>("https://www.themealdb.com/api/json/v1/1/search.php?f="+a).pipe(
      map(reponse=>reponse)
      
      )
    
  }

  haveRandomRecipe(){
    
    

    return this._http.get<any>("https://www.themealdb.com/api/json/v1/1/random.php")
        .pipe(
          map(response=>response))
  }

  getReceipeByCountry(a:any){

    return this._http.get<any[]>("https://www.themealdb.com/api/json/v1/1/filter.php?a="+a).pipe(
      map(reponse=>reponse)
      
      )
    
  }

}
