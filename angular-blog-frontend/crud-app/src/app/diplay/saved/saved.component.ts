import { Component, OnInit } from '@angular/core';
import { DiplayComponent } from '../diplay.component';
import { ApiService } from '../../api.service';



@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  apidata: any
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data
    }, (error) => {
      console.log("An error accessing Service");
    })
  }

  show(){

  }
}



