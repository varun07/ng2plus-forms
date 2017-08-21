import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

import { TemplateDrivenDemoComponentComponent } from './demos/template-driven-demo-component/template-driven-demo-component.component';
import { ModelDrivenDemoComponentComponent } from './demos/model-driven-demo-component/model-driven-demo-component.component';
import { MatchDirective } from './directives/match-directive.directive';
import { CustomValidatorDemoComponent } from './demos/custom-validator-demo/custom-validator-demo.component';
import { CustomFormControlComponent } from './demos/custom-form-control/custom-form-control.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/template-driven',
    pathMatch: 'full'
  },
  {
    path: 'template-driven',
    component: TemplateDrivenDemoComponentComponent
  },
  {
    path: 'model-driven',
    component: ModelDrivenDemoComponentComponent
  },
  {
    path: 'custom-validator',
    component: CustomValidatorDemoComponent
  },
  {
    path: 'custon-form-control',
    component: CustomFormControlComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, CustomInputComponent, TemplateDrivenDemoComponentComponent, ModelDrivenDemoComponentComponent, MatchDirective, CustomValidatorDemoComponent, CustomFormControlComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
