import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @Input()
  control!: AbstractControl;
  @Input()
  showErrors: boolean = true;
  @Input()
  label!: string;
  @Input()
  type: 'text' | 'email' | 'password' = 'text';

  get formControl() {
    return this.control as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
