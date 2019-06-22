import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/events.service';
import { ToastrService } from 'src/common/toastr.service';

declare let toastr

@Component({
    selector:'event-list',
    templateUrl:'./events.list.component.html'
})

export class EventListComponent implements OnInit
{
    events:any[]
    constructor(private eventService:EventService, private toastrService:ToastrService)
    {
    }
    ngOnInit()
    {
        this.events = this.eventService.getEvents();
    }
    handleThumbnailClick(eventName)
    {
        this.toastrService.success(eventName)
    }
}