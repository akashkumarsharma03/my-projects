import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  apidata:any
  fulldate:any
  i:any
  id: any;
  comments: any=[]
  constructor(private ApiService : ApiService , private route: ActivatedRoute , private apiservice: ApiService) { }

  ngOnInit(): void {
    this.fulldate = JSON.stringify(new Date().getDate()) +"/"+ JSON.stringify(new Date().getMonth()) +"/"+ JSON.stringify(new Date().getFullYear()) 


    // this.ApiService.getdata().subscribe((data) => {
    //   this.apidata = data;
    // }, (error) => {
    //   console.log("An error accessing Service");
    // })
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.ApiService.getdatabyid(this.id).subscribe(data=>{
      this.apidata = data
    }, (error) => {
      console.log("An error accessing Service");
    })

  }

  relatedpost(){
    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data;
     
       for (this.i=0; this.i=data.length; this.i++){
        
        //if(tagsarr)
       }
    }, (error) => {
      console.log("An error accessing Service");
    })

  }

  addcommnet(getcomment: string) {
    if (getcomment) {
      this.comments.push(getcomment);
    }
  }

}
