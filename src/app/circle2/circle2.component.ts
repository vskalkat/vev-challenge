import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from "../data.service";

@Component({
  selector: 'app-circle2',
  templateUrl: './circle2.component.html',
  styleUrls: ['./circle2.component.css']
})
export class Circle2Component implements OnInit {

  public x_coord: number;
  public y_coord: number;

  subscription: Subscription;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.x_coord = 400;
    this.y_coord = 400;

    // subscribe to the getMessage shared service to listen for changes to the line input value:
    this.subscription = this.data.getMessage().subscribe(message => {
      this.x_coord = message.text.x2;
      this.y_coord = message.text.y2;
    });

    this.dragElement(document.getElementById("circle2"));
  }


  dragElement(elmnt) {
    var self = this;
    var delta_x = 0, delta_y = 0;
    var x_pos_initial = 0, y_pos_initial = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      // get mouse cursor position at startup
      x_pos_initial = e.clientX;
      y_pos_initial = e.clientY;
      // call function whenever cursor moves
      document.onmousemove = elementDrag;
      // call function to end drag events when cursor goes up
      document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
      e.preventDefault();
      // calculate the new cursor position
      delta_x = x_pos_initial - e.clientX;
      delta_y = y_pos_initial - e.clientY;
      x_pos_initial = e.clientX;
      y_pos_initial = e.clientY;
      // set element's new position
      self.x_coord = (elmnt.offsetLeft - delta_x);
      self.y_coord = (elmnt.offsetTop - delta_y);
    }

    function closeDragElement() {
      // stop moving when mouse button is released
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

}
