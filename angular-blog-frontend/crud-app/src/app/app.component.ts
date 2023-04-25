import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]

})
export class AppComponent {
  apidata:any
  dis: boolean = true;
  constructor(private ApiService: ApiService) { }

  ngOnInit() {
  }

  displaybtn(){
    debugger
    this.dis=false
  }

  displaybtnagain(){
    this.dis = true
  }
}

