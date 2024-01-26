import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [CustomCardComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [CustomCardComponent],
})
export class SharedModule {}
