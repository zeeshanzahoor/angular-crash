import {Component} from '@angular/core';
import eventList from './event.data';

@Component({
    selector:'event-list',
    templateUrl:'./events.list.component.html'
})

export class EventListComponent
{
     events = eventList;
}