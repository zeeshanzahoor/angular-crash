import {Component, OnInit} from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl:'./events.list.component.html'
})

export class EventListComponent implements OnInit{
    events:any
    
    constructor(private toastrService:ToastrService, private route:ActivatedRoute){
    }

    ngOnInit()    {
        this.events = this.route.snapshot.data.events;
    }

    handleThumbnailClick(eventName){
        this.toastrService.success(eventName)
    }
}