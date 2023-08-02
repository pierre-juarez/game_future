import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNavbarComponent } from './game-navbar.component';

describe('GameNavbarComponent', () => {
  let component: GameNavbarComponent;
  let fixture: ComponentFixture<GameNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameNavbarComponent]
    });
    fixture = TestBed.createComponent(GameNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
