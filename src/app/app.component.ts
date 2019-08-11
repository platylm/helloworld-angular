import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './shared/rest-api.service';
import { Message } from './shared/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  results: string;

  constructor(public restApi: RestApiService) {}

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(){
    return this.restApi.getMessage().subscribe((data:any)=>{
      this.results = data.message;
    });
  }
}
