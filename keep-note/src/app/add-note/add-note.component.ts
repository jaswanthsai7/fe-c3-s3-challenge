import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import {notes} from'../models/notes';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  id?:number;
  @Input()
  title?:string;
  @Input()
content?:string;


@Output()
noteEvent=new EventEmitter<Note>();

addNote(){
  let note:Note={
    id:<number>this.id,
   title: <string>this.title,
   content:<string>this.content
  }
  console.log(note)
  this.noteEvent.emit(note)}
   

}
