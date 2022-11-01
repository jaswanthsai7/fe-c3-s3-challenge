import { Component, OnInit } from '@angular/core';
import { notes } from '../models/notes';
import { Note } from '../models/note';


@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allNotes=notes;

  searchText:string="";
  searchMovies:Note[]=[]
  
  
  
  searchNote(event:any){
    
  if(event==""){
    console.log(1)
    this.allNotes=notes
  }else{
    this.allNotes=notes
    let all=this.allNotes.filter(item=>item.title?.startsWith(event.toLowerCase()))
    this.allNotes=(all)
  }
    
  }

  addNote(event:Note){
console.log(event)
    this.allNotes.push(event);

  }
  
}
