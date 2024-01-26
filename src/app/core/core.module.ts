// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from './navbar/navbar.component';
// import { AppMaterialModule } from '../app-material/app-material.module';

// @NgModule({
//   declarations: [NavbarComponent],
//   imports: [CommonModule, AppMaterialModule],
//   exports: [NavbarComponent],
// })
// export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
