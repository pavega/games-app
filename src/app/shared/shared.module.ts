import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomCardComponent, CustomInputComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
  exports: [CustomCardComponent, CustomInputComponent],
})
export class SharedModule {}
