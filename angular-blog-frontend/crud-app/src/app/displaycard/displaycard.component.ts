import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-displaycard',
  templateUrl: './displaycard.component.html',
  styleUrls: ['./displaycard.component.css']
})

export class DisplaycardComponent implements OnInit {
  fulldate: any;
  apidata: any
  counter: any = localStorage.getItem("views") == null ? 0 : localStorage.getItem("views")

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.fulldate = JSON.stringify(new Date().getDate()) + "/" + JSON.stringify(new Date().getMonth()) + "/" + JSON.stringify(new Date().getFullYear())

    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data;

    }, (error) => {
      console.log("An error accessing Service");
    })
  }

  views() {
  
    ++this.counter;
    console.log(this.counter)
    localStorage.setItem("views", this.counter);
  }
}




