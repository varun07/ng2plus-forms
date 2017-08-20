import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent, MatchDirective } from './app.component';
import { CustomInputComponent } from './components/forms.component';


@NgModule({
  declarations: [
    AppComponent, MatchDirective, CustomInputComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
