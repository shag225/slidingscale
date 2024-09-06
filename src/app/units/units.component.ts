import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})
export class UnitsComponent implements OnChanges {
    @Input() bloodSugar!: number;
    units!: number;
    constructor() {}

    ngOnChanges() {
        switch (true) {
            case (this.bloodSugar <  70):
                this.units = -1
                break;
            case (this.bloodSugar >= 70 && this.bloodSugar <= 149):
                this.units = 0;
                break;
            case (this.bloodSugar >= 150 && this.bloodSugar <= 200):
                this.units = 4
                break;
            case (this.bloodSugar > 200 && this.bloodSugar <= 250):
                this.units = 7
                break;
            case (this.bloodSugar > 250 && this.bloodSugar <= 300):
                this.units = 10
                break;
            case (this.bloodSugar > 300 && this.bloodSugar <= 350):
                this.units = 12
                break;
            case (this.bloodSugar > 350 && this.bloodSugar <= 400):
                this.units = 15
                break;
            case (this.bloodSugar > 400):
                this.units = 15
                break;
        }
    }
 
}
