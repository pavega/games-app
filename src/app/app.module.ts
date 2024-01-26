import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule as CustomCoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { GamesRoutingModule } from './games/games-routing.module';
import { GamesModule } from './games/games.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomCoreModule,
    SharedModule,
    GamesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
