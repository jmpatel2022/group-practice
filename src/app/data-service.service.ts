import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrls: string = "https://jsonplaceholder.typicode.com/posts/1"
  constructor(private http: HttpClient) { }
  testFunction(x: any, y: any) {
    alert(x * y);
  }
  records: any;
  getRecords(endpoint: string) {
    return this.http.get(this.baseUrls + endpoint);
  }

}
