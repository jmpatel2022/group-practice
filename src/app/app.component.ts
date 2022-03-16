import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(private dataService: DataServiceService) { }
  title = 'creat-app';
  selectedCar: number = 0;
  private name = 'komal';
  dataInfo: Subscription = new Subscription();
  records: any;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  public getData() {
    this.dataInfo = this.dataService.getRecords('/comments').subscribe ((data) => {
      this.records = data;
      console.log(this.records)
        });
  }


  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.dataInfo.unsubscribe();
  }


}
