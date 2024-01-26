import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() valueChanged = new EventEmitter<string>();

  customForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customForm = this.buildForm();
  }

  ngOnInit(): void {
    this.getInpuValue();
  }

  buildForm() {
    return this.fb.group({
      inputData: [''],
    });
  }

  getInpuValue() {
    this.customForm.get('inputData')?.valueChanges.subscribe((value) => {
      this.valueChanged.emit(value);
    });
  }
}
