import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input()
notes:Note[]=[]
se(){
  console.log(this.notes)
}

}
