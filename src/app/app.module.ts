import { PortfolioService } from './portfolio/services/portfolio-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule} from "angular2-carousel";

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
   declarations: [
      AppComponent,
      DescriptionComponent,
      NavbarComponent,
      PortfolioComponent
   ],
   imports: [
      BrowserModule,
      CarouselModule
   ],
   providers: [
     PortfolioService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
