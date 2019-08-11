import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  results: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Making the HTTP Request
    this.http
     .get('http://localhost:3000/say').subscribe((data:any)=>{
       this.results = data.message;
     });
  }
}
