import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input('title') title!: string;
  @Input('text') text!: string;
 
  constructor() { }

  ngOnInit(): void {
  }

}
