import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDetail } from 'src/app/models/game.detail';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.sass']
})
export class GameDetailComponent implements OnInit {

  game: GameDetail | null = null;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameServiceService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')){
        const gameID = Number(params.get('id'));
        if (!isNaN(gameID)) {
          this.gameService.getDetailGame(gameID).subscribe((game) => {
            this.game = game;
          });
        } else {
          alert('The present ID is not valid');
          this.router.navigateByUrl('/');
        }
      }
    });
  }

}
