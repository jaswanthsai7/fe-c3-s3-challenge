import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  searchText?:string;

  @Output()
  entered=new EventEmitter<any>();
searchNote(){
  
  this.entered.emit(this.searchText)}

}
