import { Component, OnInit, OnDestroy  } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs/operators"
import { Recipe } from "src/app/models/recipe"
import { Observable } from "rxjs"
import { ServeRecipeService } from "src/app/services/serve-recipe.service"
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy  {
 
  meals:any
  constructor(private sservice: ServeRecipeService,private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
    //this.receiveReceipe()
    this.filterByCountryName()
  this.router.navigateByUrl('/filter/American');


  }


receiveReceipe(){
  this.sservice.getAllReceipe().subscribe(
    (meals)=>
    {
      
      this.meals=meals
      console.log(this.meals)
    }
  )
}
filterByCountryName(){
 
  const a = this.route.snapshot.paramMap.get('a');
this.sservice.getReceipeByCountry(a).subscribe(
  (meals)=>{
    this.meals=meals
    
  }
    
)
 
}


filterByFirstLetter(){
 
  const a = this.route.snapshot.paramMap.get('a');
this.sservice.getReceipeByLetter(a).subscribe(
  (meals)=>{
    this.meals=meals
    
  }
    
)
 
}

ngOnDestroy(){
  this.filterByCountryName()
}
}
