import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/model/game';
import { ActionService } from 'src/app/services/action-service/action.service';
import { GameService } from 'src/app/services/game-service/game.service';

@Component({
  selector: 'app-get-games',
  templateUrl: './get-games.component.html',
  styleUrls: ['./get-games.component.css'],
})
export class GetGamesComponent implements OnInit, OnDestroy {
  private actionSubscription: Subscription;
  games: Game[] = [];

  constructor(
    private gameService: GameService,
    private actionService: ActionService
  ) {
    this.actionSubscription = this.actionService.action$.subscribe(() => {
      this.handleAction();
    });
  }

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games.results.map((gameData: any) => {
          return new Game(
            gameData.id,
            gameData.name,
            gameData.background_image,
            gameData.rating,
            gameData.released
          );
        });
      },
      error: (error) => {
        console.error('Fetching error', error);
      },
    });
  }

  handleAction() {
    console.log('action');
  }

  ngOnDestroy(): void {
    this.actionSubscription.unsubscribe();
  }
}
