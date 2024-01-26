import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetGamesComponent } from './get-games/get-games.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GetGamesComponent],
  imports: [CommonModule, SharedModule],
  exports: [GetGamesComponent],
})
export class GamesModule {}
