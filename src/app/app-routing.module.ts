import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ImageHomeComponent } from './components/image-home/image-home.component';
import { LocationComponent } from './components/location/location.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path:"", redirectTo:"/homeImage", pathMatch:"full"},
  {path:"location", component: LocationComponent},
  {path: "menu", component:MenuComponent},
  {path:"reservation", component:ReservationComponent},
  {path:"welcome", component:WelcomeComponent},
  {path: "nav", component: NavigationComponent},
  {path: "restaurant", component: ReservationComponent},
  {path: "homeImage", component:ImageHomeComponent},
  {path: "blog", component: BlogComponent},
  {path:"detailRecipe/:id", component: RestaurantComponent },
  {path:"filter/:a", component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
