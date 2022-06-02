import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Attendee } from 'src/app/models';

 

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.scss']
})
export class AddAttendeeComponent implements OnInit {
  @Output()
    attendee= new EventEmitter<Attendee>()
  addAttendeeForm:FormGroup= new FormGroup({})
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.addAttendeeForm= this.fb.group({
      id: [],
      name: ['',[Validators.required]]
    })
  }
  submit(){
    const attendee: Attendee={
      id: this.addAttendeeForm.value.id,
      name: this.addAttendeeForm.value.name,
      attending: true,
      guests: 0
    }
    console.log('attendee', attendee)
    this.attendee.emit(attendee)
    this.createForm()
  }

}
