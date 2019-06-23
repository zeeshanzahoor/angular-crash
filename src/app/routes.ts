import { Routes } from '@angular/router';
import { EventListComponent } from './events/events.list/events.list.component';
import { EventDetailComponent } from './events/events.detail/events.detail.component';
import { EventCreateComponent } from './events/events.create/events.create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/events.detail/event.route.activator.service';
import { EventListResolver } from './events/events.list/events.list.resolver.service';


export const appRoutes: Routes = [
    { path: '404', component: Error404Component },
    { path: 'events/create', component: EventCreateComponent },
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator] },
    { path: 'user', loadChildren: "./user/user.module#UserModule" },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
]