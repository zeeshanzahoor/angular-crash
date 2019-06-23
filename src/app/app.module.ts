import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrService } from 'src/app/common/toastr.service';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { Error404Component } from './errors/404.component';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';



import { 
  EventListComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventRouteActivator,
  EventListResolver,
  EventThumbnailComponent,
  EventService
} from './events';

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
