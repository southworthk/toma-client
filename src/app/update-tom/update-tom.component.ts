import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-update-tom',
  templateUrl: './update-tom.component.html',
  styleUrls: ['./update-tom.component.css']
})
export class UpdateTomComponent implements OnInit {

  graphImage: string = '../../graph01.png';
  val: string = '';

  @Output() opened: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.opened.emit(true);
  }

    createEntity(){
        this.graphImage = '../../graph02.png';
        this.val = ' ';
    }

}
