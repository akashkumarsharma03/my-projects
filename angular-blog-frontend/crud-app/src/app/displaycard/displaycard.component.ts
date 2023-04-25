import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-displaycard',
  templateUrl: './displaycard.component.html',
  styleUrls: ['./displaycard.component.css']
})

export class DisplaycardComponent implements OnInit {

  @ViewChild('myDOMElement') myDOMElement: ElementRef | undefined;

  fulldate: any;
  apidata: any
  counter: any = localStorage.getItem("views") == null ? 0 : localStorage.getItem("views")
  dt: any;
  dataDisplay: any;
  val: boolean = true

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.fulldate = JSON.stringify(new Date().getDate()) + "/" + JSON.stringify(new Date().getMonth()) + "/" + JSON.stringify(new Date().getFullYear())

    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data;

      if(this.apidata){
        this.val = false
      }

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


