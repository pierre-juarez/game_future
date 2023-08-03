import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameDetailComponent } from './game-detail.component';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { GameServiceService } from 'src/app/services/game-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GameNavbarComponent } from '../game-navbar/game-navbar.component';
import { GameFooterComponent } from '../game-footer/game-footer.component';
import { GameDetail } from 'src/app/models/game.detail';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;
  
  const mockGameService = {
    getDetailGame: (gameId: number) => {
      const mockGameDetail: GameDetail = {
        id: gameId,
        title: 'Juego de prueba',
        thumbnail: 'ruta/de/la/imagen.jpg',
        status: 'Active',
        short_description: 'Descripción corta del juego de prueba',
        description: 'Descripción completa del juego de prueba',
        game_url: 'https://www.example.com/game',
        genre: 'Acción',
        platform: 'PC',
        publisher: 'Editora del juego de prueba',
        developer: 'Desarrollador del juego de prueba',
        release_date: '2023-08-01',
        freetogame_profile_url: 'https://www.example.com/game-profile',
        minimum_system_requirements: {
          os: 'Windows 10',
          processor: 'Intel Core i5',
          memory: '8 GB RAM',
          graphics: 'NVIDIA GeForce GTX 1060',
          storage: '50 GB',
        },
        screenshots: [
          {
            id: 1,
            image: 'ruta/de/la/captura1.jpg',
          },
          {
            id: 2,
            image: 'ruta/de/la/captura2.jpg',
          },
        ],
      };
  
      return of(mockGameDetail);
    },
  };
  

  const activatedRouteMock = {
    paramMap: of(convertToParamMap({ id: '234' }))
  };

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      declarations: [GameDetailComponent, GameNavbarComponent, GameFooterComponent],
      providers: [
        GameServiceService,
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: GameServiceService, useValue: mockGameService }
      ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const mockGame: GameDetail = {
  id: 1,
  title: 'Game 1',
  thumbnail: 'thumbnail1.jpg',
  status: 'Active',
  short_description: 'Description for game 1',
  description: 'Detailed description for game 1',
  game_url: 'https://example.com/game1',
  genre: 'Action',
  platform: 'PC',
  publisher: 'Publisher 1',
  developer: 'Developer 1',
  release_date: '2023-08-01',
  freetogame_profile_url: 'https://example.com/profile/game1',
  minimum_system_requirements: {
    os: 'Windows 10',
    processor: 'Intel Core i5',
    memory: '8 GB RAM',
    graphics: 'NVIDIA GeForce GTX 1050',
    storage: '20 GB available space',
  },
  screenshots: [
    {
      id: 1,
      image: 'screenshot1.jpg',
    },
    {
      id: 2,
      image: 'screenshot2.jpg',
    },
  ],
};