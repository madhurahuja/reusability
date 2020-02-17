import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {

  @Output() updateEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
