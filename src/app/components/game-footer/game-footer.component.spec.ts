import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFooterComponent } from './game-footer.component';

describe('GameFooterComponent', () => {
  let component: GameFooterComponent;
  let fixture: ComponentFixture<GameFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameFooterComponent]
    });
    fixture = TestBed.createComponent(GameFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display three buttons images', () => {
    const buttonImgs = fixture.nativeElement.querySelectorAll('.button-img');
    expect(buttonImgs.length).toBe(3);
  });

});
