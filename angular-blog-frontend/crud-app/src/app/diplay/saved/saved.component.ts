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
  result: any=[];
  category: any;
  isShow: boolean=true;
  showcate: any=[];
  filtercategory:  any=[];
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data
      
      for(let i =0; i<=this.apidata.length-1; i++){
        this.filtercategory.unshift(this.apidata[i].BlogCategory)
      }
      this.showcate = [...new Set(this.filtercategory
        )]
    }, (error) => {
      console.log("An error accessing Service");
    })
   
  }

  show(i: any) {
    debugger
    this.isShow = !this.isShow
    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data
      this.category = this.apidata[i].BlogCategory
      this.result = this.apidata.filter((blog: any) => blog.BlogCategory.includes(this.category));
    } ,(error) => {
      console.log("An error accessing Service");
    })
  }
}



