import { Component, OnInit } from '@angular/core';
import { ServeRecipeService } from "src/app/services/serve-recipe.service"
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private sservice: ServeRecipeService, private route: ActivatedRoute) { }
  recipe: any;
  id:any
  trying: true
  ngOnInit(): void {
    this.getOneRecipe()

  }

  getOneRecipe(){


    const id = this.route.snapshot.paramMap.get('id');
    this.sservice.getSingleReceipe(id).subscribe(
      recipe=>{
  
        this.recipe=recipe
        console.log(this.recipe)

      }

      
      
    )
  }

}
