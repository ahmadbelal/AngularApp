import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
//import{MatInputModule} from '@angular/material/input';
//import{MatCardModule} from '@angular/material/Card';
//import{MatButtonModule} from '@angular/material/Button';
import {DefaultModule} from './layouts/default/default.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
   // MatInputModule,
   // MatCardModule,
    //MatButtonModule,
    DefaultModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
