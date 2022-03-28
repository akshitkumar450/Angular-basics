import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: any;
  @Input() color: any;
  // passing it to parent
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    // console.log('add');
    this.btnClick.emit();
  }
}
