import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FooterComponent } from './footer/footer.component';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { DinosaurComponent } from './dinosaur/dinosaur.component';
import { AddDinosaurComponent } from './add-dinosaur/add-dinosaur.component';
import { ParksComponent } from './parks/parks.component';
import { ParkComponent } from './park/park.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    FooterComponent,
    DinosaursComponent,
    DinosaurComponent,
    AddDinosaurComponent,
    ParksComponent,
    ParkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
