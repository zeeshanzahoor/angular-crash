import { Component, OnInit } from "@angular/core";
import { EventService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl:'./events.detail.component.html'    
})

export class EventDetailComponent implements OnInit {
    event:any
    constructor(private eventService:EventService, private activatedRoute:ActivatedRoute){
    }
    ngOnInit(){
        let eventId = +this.activatedRoute.snapshot.params.id
        this.event = this.eventService.getEventById(eventId)
    }
}