import { Component, OnInit } from '@angular/core';
import { ServeRecipeService } from "src/app/services/serve-recipe.service"
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  recipe: any;

  constructor(private sservice: ServeRecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.randomRecipe()

    
  }  


randomRecipe(){




  this.sservice.haveRandomRecipe()
  .subscribe(
    (data)=>
      {
        this.recipe=data
    
       
      })

  


} 

getDetails(){

  const id = this.route.snapshot.paramMap.get('id');
  this.sservice.getSingleReceipe(id)
    .subscribe(
      (data)=>{
        this.recipe=data
        console.log(this.recipe)
      }
    )

}
}