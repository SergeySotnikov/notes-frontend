import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input('title') title!: string;
  @Input('text') text!: string;
  @Input('link') link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  onDelete() {
    this.deleteEvent.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
