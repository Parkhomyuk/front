import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Attendee } from 'src/app/models';
import { startSpinnerAction, stopSpinnerAction } from 'src/app/state/spinner/actions/spinner.actions';
import { getSpinner } from 'src/app/state/spinner/selectors/spinner.selectors';
import { EventService } from '../../services/event.service';
import {StateApp} from 'src/app/state/state' 
import { AddAttendeeSuccess, LoadAttendees } from '../../state/attendees/actions/attendees.actions';
import { getAttendees, getFilterAttendees } from '../../state/attendees/selectors/attendees.selectord';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  attendees$!: Observable<Attendee[]>;
  spinner$!: Observable<boolean>;
  subscribtion$: Subscription= new Subscription()
  constructor(private eventService: EventService, private store: Store<StateApp>, private router: Router) { }
  

  ngOnInit(): void {
    //this.getAttendees()
  // this.attendees$=this.store.pipe(select(getFilterAttendees))
   // this.store.dispatch(LoadAttendees())
   // this.store.dispatch(LoadAttendees())
    //this.spinner$=this.store.pipe(select(getSpinner));
    // this.attendees$=this.store.pipe(select(state=>state.events.attendees));
   this.attendees$=this.store.pipe(select(getAttendees));
    this.store.dispatch(LoadAttendees());
    this.attendees$.subscribe(data=>{
     
      
        console.log('this.attendees$',data)
       
    })

  }
  // addAttendee(attendee: Attendee){
  //   // this.attendees=[...this.attendees, attendee];
  //   // console.log(this.attendees)
  //   this.store.dispatch(startSpinnerAction());
  //   this.subscribtion$=this.eventService.addAttendee(attendee).subscribe(()=>{
  //     setTimeout(()=>{
  //       this.getAttendees()
  //       this.store.dispatch(stopSpinnerAction())
  //     },1500)
      
  //   } )
    
  // }
  addAttendee(attendee: Attendee){
    this.store.dispatch(AddAttendeeSuccess({attendee}))
    
  }
  getAttendees(){
     this.attendees$=this.eventService.getAttendees()
  }
  ngOnDestroy(): void {
    this.subscribtion$.unsubscribe()
  }
  navigate(filterBy: any){
    this.router.navigateByUrl(`/event?filterBy=${filterBy.target.value}`)
  }

}
