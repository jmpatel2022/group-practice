import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-prac4',
  templateUrl: './prac4.component.html',
  styleUrls: ['./prac4.component.css']
})
export class Prac4Component implements OnInit {

  constructor(private multi: DataServiceService) { }

  ngOnInit(): void {
  }
  record1: any;
  name: string = "jyoti";
  pracFunction() {
    this.multi.testFunction(3, 5)
  }
  test1Function() {

    // this.multi.getRecords()
    this.record1 = this.multi.records

  }
  deleteRecord(record: any) {
    let i = this.record1.indexOf(record);
    this.record1.splice(i, 1)
  }
}



