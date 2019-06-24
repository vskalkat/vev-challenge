import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input() start_x: number;
  @Input() start_y: number;
  @Input() end_x: number;
  @Input() end_y: number;

  public length: number;
  public theta: number;

  @Output() lineMessageEvent = new EventEmitter();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.length = Math.round( Math.sqrt(Math.pow(this.end_x-this.start_x, 2) + Math.pow(this.end_y-this.start_y, 2)) );
    this.theta = Math.asin((this.end_x - this.start_x)/this.length) * (180/Math.PI);
  }

  ngOnChanges(changes: SimpleChanges){
    // called any time an input property is changed.
    this.length = Math.round( Math.sqrt(Math.pow(this.end_x-this.start_x, 2) + Math.pow(this.end_y-this.start_y, 2)) );
    this.theta = Math.asin((this.end_x - this.start_x)/this.length) * (180/Math.PI);
    this.theta = (this.end_y > this.start_y) ? 90 - this.theta : 90 + this.theta;
  }

  lengthInputChange(){
    var old_length = Math.round( Math.sqrt(Math.pow(this.end_x-this.start_x, 2) + Math.pow(this.end_y-this.start_y, 2)) );
    // remove offsets from coordinates
    var start_x = this.start_x - 75;
    var start_y = this.start_y - 75;
    var end_x = this.end_x - 75;
    var end_y = this.end_y - 75;
    // Compute new ending coordinates based on new line length
    this.theta = Math.asin((end_x-start_x)/old_length);
    var x2 = Math.round(this.length*Math.sin(this.theta) + start_x);
    var y2 = Math.round(this.length*Math.cos(this.theta) + start_y);
    // Send the calculated x2 and y2 variables to circle2 to be used as its new coordinates.
    var new_position = {'x2' : x2, 'y2' : y2};
    this.data.sendMessage(new_position);
  }

}
