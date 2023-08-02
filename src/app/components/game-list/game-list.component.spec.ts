import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameListComponent } from './game-list.component';
import { GameServiceService } from 'src/app/services/game-service.service';
import { of } from 'rxjs';
import { GameList } from 'src/app/models/game.list';
import { HttpClientModule } from '@angular/common/http';
import { GameNavbarComponent } from '../game-navbar/game-navbar.component';
import { GameFooterComponent } from '../game-footer/game-footer.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';


describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let gameService: GameServiceService;

  const activatedRouteMock = {
    paramMap: of({ get: (id: string) => '1' }), // Mock de paramMap que devuelve un valor para 'id'
  };
  

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [GameListComponent, GameNavbarComponent, GameFooterComponent],
      imports: [HttpClientModule, CommonModule, RouterModule],
      providers: [GameServiceService, { provide: ActivatedRoute, useValue: activatedRouteMock }]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameServiceService);

    spyOn(gameService, 'getGames').and.returnValue(of(mockGames));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch games on initialization', () => {
    expect(gameService.getGames).toHaveBeenCalledOnceWith();
    expect(component.filteredGames).toEqual(mockGames);
  });

  it('should filter games by title', () => {
    const event: any =  { target: { value : 'game 1'}};
    component.onSearch(event);
    expect(component.filteredGames).toEqual([mockGames[0]]);
  });

  it('should filter games by gender', () => {
    const event: any =  { target: { value : 'Action'}};
    component.filterGender(event);
    expect(component.filteredGames).toEqual([mockGames[0]]);
  });

  it('should filter games by platform', () => {
    const event: any =  { target: { value : 'Windows'}};
    component.filterPlatform(event);
    expect(component.filteredGames).toEqual([mockGames[1]]);
  });

  it('should filter games by multiple filters', () => {

    const titleSearch: any = { target: { value: 'game 1' } };
    component.onSearch(titleSearch);
    const genderSelected: any = { target: { value: 'Action' } };
    component.filterGender(genderSelected);
    const platformSelected: any = { target: { value: 'PC' } };
    component.filterPlatform(platformSelected);

    expect(component.filteredGames).toEqual([mockGames[0]]);
  });

});

const mockGames: GameList[] = [
  {
    id: 1,
    title: 'Game 1',
    thumbnail: 'thumbnail1.jpg',
    short_description: 'Description for game 1',
    genre: 'Action',
    platform: 'PC',
    game_url: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: ''
  },
  {
    id: 2,
    title: 'Game 2',
    thumbnail: 'thumbnail2.jpg',
    short_description: 'Description for game 2',
    genre: 'Arcade',
    platform: 'Windows',
    game_url: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: ''
  },
];