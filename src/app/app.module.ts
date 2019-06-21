import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/events.list.component';
import { EventThumbnailComponent } from './events/events.thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
