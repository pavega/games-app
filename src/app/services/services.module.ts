import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game-service/game.service';
import { ActionService } from './action-service/action.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [GameService, ActionService],
})
export class ServicesModule {}
