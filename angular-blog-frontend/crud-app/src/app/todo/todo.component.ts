import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
heroes:any=[]
  constructor() { }

  ngOnInit(): void {
  }

  
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  

}
