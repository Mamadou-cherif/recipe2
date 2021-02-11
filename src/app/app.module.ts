import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { LocationComponent } from './components/location/location.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ImageHomeComponent } from './components/image-home/image-home.component';
import { BlogComponent } from './components/blog/blog.component';
import {HttpClientModule} from "@angular/common/http"
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RestaurantComponent,
    MenuComponent,
    ReservationComponent,
    LocationComponent,
    FooterComponent,
    NavigationComponent,
    ImageHomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   BrowserAnimationsModule,
   HttpClientModule,
   CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
