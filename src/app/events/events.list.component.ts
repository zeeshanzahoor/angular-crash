import {Component} from '@angular/core'

@Component({
    selector:'event-list',
    templateUrl:'./events.list.component.html'
})

export class EventListComponent
{
    event = {
        id:1,
        name:'Angular Connect',
        data:'9/26/2030',
        time: '10:00 am',
        price: 499.99,
        imageUrl:'/assets/images/angularconnect-shield.png',
        location:{
            address:'1057 DT',
            city:'London',
            country:'Turkey'
        }
    }
}