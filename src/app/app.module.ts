import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { BloodSugarFormComponent } from './blood-sugar-form/blood-sugar-form.component';
import { MaterialModule } from './material.module';
import { UnitsComponent } from './units/units.component';

@NgModule({
  declarations: [
    AppComponent,
    BloodSugarFormComponent,
    UnitsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
