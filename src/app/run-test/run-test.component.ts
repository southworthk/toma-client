import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-run-test',
  templateUrl: './run-test.component.html',
  styleUrls: ['./run-test.component.css']
})

@Injectable()
export class RunTestComponent implements OnInit {

  private opened;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  public runHubTest(){
      this.dataService.getTestResults()
          .subscribe(
              data => {
                  this.handleDetailResponse(data);
              },
              error => {
                  console.log(error);
              });
  }

    handleDetailResponse(data) {
        console.log(data);
        this.opened = true;
    }




}
