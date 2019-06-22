import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/events.list.component';
import { EventThumbnailComponent } from './events/events.thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/events.service';
import { ToastrService } from 'src/common/toastr.service';

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
  providers:[
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
