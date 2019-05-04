import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Info } from '../entity/info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss', './dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  path = "http://localhost:58371/api";
  info: Info;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.httpClient.get<Info>(this.path + "/info").subscribe(data => {
      this.info = data;
      console.log(data)
    })
  }

}
