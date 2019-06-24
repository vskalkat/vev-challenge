import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Circle1Component } from './circle1/circle1.component';
import { Circle2Component } from './circle2/circle2.component';
import { LineComponent } from './line/line.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Circle1Component,
    Circle2Component,
    LineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
