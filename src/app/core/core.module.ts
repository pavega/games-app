import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, AppMaterialModule, SharedModule, ReactiveFormsModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
