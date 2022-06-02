import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './containers/event/event.component';
import { EventRoutingModule } from './event.routingModule';
import { AddAttendeeComponent } from './containers/add-attendee/add-attendee.component';
import { ReactiveFormsModule } from '@angular/forms';
 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EventListComponent } from './containers/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { effectsEvent, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { AttendeeEffects } from './state/attendees/effects/attendee.effects';



@NgModule({
  declarations: [
    EventComponent,
    AddAttendeeComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    StoreModule.forFeature('event', reducers),
    EffectsModule.forFeature([AttendeeEffects])
  ],
  exports:[
    EventComponent
  ]
})
export class EventModule { }
