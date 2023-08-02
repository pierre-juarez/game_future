import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameNavbarComponent } from './game-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('GameNavbarComponent', () => {
  let component: GameNavbarComponent;
  let fixture: ComponentFixture<GameNavbarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameNavbarComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome user message', () => {
    component.username = 'Pierre';
    fixture.detectChanges();
    const welcomeUserElement = fixture.nativeElement.querySelector('.welcome-user');
    expect(welcomeUserElement.textContent).toContain('Welcome, Pierre!');
  });

});
