import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { GameServiceService } from './services/game-service.service';
import { GameNavbarComponent } from './components/game-navbar/game-navbar.component';
import { GameFooterComponent } from './components/game-footer/game-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent,
    GameNavbarComponent,
    GameFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [GameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
