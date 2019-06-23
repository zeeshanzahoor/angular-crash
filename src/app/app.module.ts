import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventService } from './events/shared/events.service';
import { ToastrService } from 'src/app/common/toastr.service';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventListComponent } from './events/events.list/events.list.component';
import { EventThumbnailComponent } from './events/events.thumbnail/events.thumbnail.component';
import { EventDetailComponent } from './events/events.detail/events.detail.component';
import { EventCreateComponent } from './events/events.create/events.create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/events.detail/event.route.activator.service';
import { EventListResolver } from './events/events.list/events.list.resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventListComponent,
    EventDetailComponent,
    EventCreateComponent,
    NavBarComponent,
    Error404Component
  ],
  providers:[
    EventService,
    ToastrService,

    EventRouteActivator,

    EventListResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
