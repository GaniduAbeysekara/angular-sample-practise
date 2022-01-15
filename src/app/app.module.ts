import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomeDerective } from './derectives-practice/custome-derective.derective';
import { DerectivesPracticeComponent } from './derectives-practice/derectives-practice.component';
import { UnlessDirective } from './derectives-practice/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DerectivesPracticeComponent,
    CustomeDerective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
