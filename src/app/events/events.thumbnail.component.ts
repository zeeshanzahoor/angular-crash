import { Component, Input, } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './events.thumbnail.component.html',
    styleUrls: ['./events.thumbnail.component.css'],
})

export class EventThumbnailComponent {
    @Input() event: any

    getTimeClasses()
    {
        return "bold green";
    }
}

