import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GameService } from 'src/app/services/game-service/game.service';

@Component({
  selector: 'app-get-games',
  templateUrl: './get-games.component.html',
  styleUrls: ['./get-games.component.css'],
})
export class GetGamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

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
}
