import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blood-sugar-form',
  templateUrl: './blood-sugar-form.component.html',
  styleUrl: './blood-sugar-form.component.scss'
})
export class BloodSugarFormComponent {
  bloodSugarForm: FormGroup;
  bloodSugar!: number;
  
  constructor(private fb: FormBuilder) {
    this.bloodSugarForm = this.fb.group({
      bloodSugar: ['', Validators.required]
    });
  }

  ngOnInit() {
   
  }

  submit() {
    this.bloodSugar = this.bloodSugarForm.get('bloodSugar')?.value;
  }
 
}
