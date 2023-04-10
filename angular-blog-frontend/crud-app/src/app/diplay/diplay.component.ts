import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-diplay',
  templateUrl: './diplay.component.html',
  styleUrls: ['./diplay.component.css']
})
export class DiplayComponent implements OnInit {

  constructor(private ApiService: ApiService) { }



  ngOnInit(): void {

  }
}
