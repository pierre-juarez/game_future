import { Component, OnInit } from '@angular/core';
import { GameList } from 'src/app/models/game.list';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.sass']
})
export class GameListComponent implements OnInit {
  allGames: GameList[] = [];
  allGenders: string[] = ['All genders'];
  allPlatforms: string[] = ['All platforms'];
  selectedGender: string = "";
  textSearch: string = "";
  selectedPlatform: string = "";
  filteredGames: GameList[] = [];

  constructor(
    private gameService: GameServiceService
  ){}

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      (games) => {
        this.allGames = games;
        this.filteredGames = games;
        games.forEach((game) => {
          if (!this.allGenders.includes(game.genre)) {
            this.allGenders.push(game.genre);
          }
        });
        games.forEach((game) => {
          if (!this.allPlatforms.includes(game.platform)) {
            this.allPlatforms.push(game.platform);
          }
        });
      },
      (error) => {
        console.error('Error al obtener juegos:', error);
      }
    );

  }

  onSearch(event: Event): void{
    this.textSearch = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  filterGender(event: Event): void{
    this.selectedGender = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  filterPlatform(event: Event): void{
    this.selectedPlatform = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  private applyFilters(): void {
    let filteredGames = this.allGames;
  
    if (this.textSearch.trim() !== '') {
      filteredGames = filteredGames.filter(game => game.title.toLowerCase().includes(this.textSearch.toLowerCase()));
    }
  
    if (this.selectedGender !== 'All genders') {
      filteredGames = filteredGames.filter(game => game.genre.includes(this.selectedGender));
    }
  
    if (this.selectedPlatform !== 'All platforms') {
      filteredGames = filteredGames.filter(game => game.platform.includes(this.selectedPlatform));
    }
    
    this.filteredGames = filteredGames;
  }
  

}
