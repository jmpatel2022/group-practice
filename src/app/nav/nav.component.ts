
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private data1: DataServiceService) { }
  record1: any;
  ngOnInit(): void {
  }
  clickFumction() {
    //this.data1.getRecords();
    this.record1 = this.data1.records

  }
}
