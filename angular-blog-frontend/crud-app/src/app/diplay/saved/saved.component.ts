import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DiplayComponent } from '../diplay.component';
import { ApiService } from '../../api.service';



@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  @ViewChild('div0') div0: ElementRef |undefined ;
  apidata: any;
  categoryList : any = []
  categoryWiseData : any =[]
  result: any=[];
  category: any;
  isShow: boolean=true;
  showcate: any=[];
  filtercategory:  any=[];
  val: boolean = true;
  listOfBlog :any={};
  currentCategory = '';
  constructor(private ApiService: ApiService) {
   
   }

  ngOnInit(): void {
    debugger;
    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data;
      this.categoryList = [...new Set(data.map((item:any) => item.BlogCategory))];
      this.categoryList.forEach((category:any) => {
        this.categoryWiseData.push({'categoryName' : category , 'data' : this.apidata.filter((t:any)=>t.BlogCategory == category).map((t:any) => t.BlogTitle)});
      });
      
    }, (error) => {
      console.log("An error accessing Service");
    })
   
  }



  toggleDiv(data:any){
    this.currentCategory = data.categoryName;
    console.log(data);
  }
}



