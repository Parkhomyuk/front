import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
 
import { Attendee } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  getAttendees(): Observable<Attendee[]>{
    return this.http.get<Attendee[]>('/api/attendees')
  }
  addAttendee(attendee: Attendee):Observable<Attendee>{
   
    return this.http.post<Attendee>('/api/attendees', attendee);
  }

//   getAttendees(): Observable<Attendee[]>{
//     return of ([
//       {
//       name: 'Duncan',
//       attending: true,
//       guests: 0
//   }
// ] as Attendee[]) 
//   }
}
