import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: any
  apidata: any;
  result: any = []
  show: any = []
  val: boolean =true
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data;
      if(this.apidata){
        this.val = false
      }
    }, (error) => {
      console.log("An error accessing Service");
    })
  }

  searchbar() {
    const searchArray = this.search.split(" ");
    for (let i = 0; i < searchArray.length; i++) {
      this.result = this.result.concat(this.apidata.filter((blog:any) => blog.tags.includes(searchArray[i])));
    }
    console.log(this.result)

  }
}
