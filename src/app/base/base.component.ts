import { Component, OnInit, ContentChild, TemplateRef, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass']
})
export class BaseComponent implements OnInit {
  @ContentChild('template')
  templateRef: TemplateRef<any>;

  @Input()
  mode: string;

  data = {
    key: 'value'
  };

  constructor() { }

  ngOnInit() {
    console.log(this.templateRef);
    console.log(this)
  }

  onClick($event) {
    console.log($event);
  }

  create() {
    console.log('create action called');
  }

  update() {
    console.log('update action called');
  }

}
