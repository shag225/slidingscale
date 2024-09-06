import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';

import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButton
  ],
 exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButton
 ]
})
export class MaterialModule { }
