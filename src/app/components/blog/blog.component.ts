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
export class BlogComponent implements OnInit  {
 
  meals:any
  constructor(private sservice: ServeRecipeService,private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
    //this.receiveReceipe()
    this.filterByCountryName()


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




/********************************************************************************************************************************** */

filterByCountryName1(){

  this.router.navigateByUrl('/filter/British');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);


}



filterByCountryName2(){
  this.router.navigateByUrl('/filter/American');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}


filterByCountryName3(){
  this.router.navigateByUrl('/filter/French');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName4(){
  this.router.navigateByUrl('/filter/Canadian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName5(){
  this.router.navigateByUrl('/filter/Jamaican');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName6(){
  this.router.navigateByUrl('/filter/Chinese');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName7(){
  this.router.navigateByUrl('/filter/Dutch');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName8(){
  this.router.navigateByUrl('/filter/Egyptian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName9(){
  this.router.navigateByUrl('/filter/Greek');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName10(){
  this.router.navigateByUrl('/filter/Indian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName11(){
  this.router.navigateByUrl('/filter/Irish');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName12(){
  this.router.navigateByUrl('/filter/Italian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName13(){
  this.router.navigateByUrl('/filter/Japanese');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName14(){
  this.router.navigateByUrl('/filter/Kenyan');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName15(){
  this.router.navigateByUrl('/filter/Malaysian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName16(){
  this.router.navigateByUrl('/filter/Mexican');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}



filterByCountryName17(){
  this.router.navigateByUrl('/filter/Moroccan');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName18(){
  this.router.navigateByUrl('/filter/Croatian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}



filterByCountryName19(){
  this.router.navigateByUrl('/filter/Norwegian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}


filterByCountryName20(){
  this.router.navigateByUrl('/filter/Portuguese');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}


filterByCountryName21(){
  this.router.navigateByUrl('/filter/Russian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}


filterByCountryName22(){
  this.router.navigateByUrl('/filter/Argentinian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}



filterByCountryName23(){
  this.router.navigateByUrl('/filter/Spanish');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

filterByCountryName24(){
  this.router.navigateByUrl('/filter/Thai');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}





filterByCountryName25(){
  this.router.navigateByUrl('/filter/Vietnamese');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}



filterByCountryName26(){
  this.router.navigateByUrl('/filter/Turkish');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}



filterByCountryName27(){
  this.router.navigateByUrl('/filter/Tunisian');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}


filterByCountryName28(){
  this.router.navigateByUrl('/filter/Polish');
  const a = this.route.snapshot.paramMap.get('a');
  this.sservice.getReceipeByCountry(a).subscribe(
    (meals)=>{
      this.meals=meals
      
    }
      
  )
   
  
 setTimeout(function(){ window.location.reload() }, 3);

}

}






