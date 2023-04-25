import { Component, OnInit } from '@angular/core';
import { parse } from 'angular-html-parser';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: any = [];
  markdone: boolean = false
  value: any = []
  constructor() { }

  ngOnInit(): void {
  }


  addtask(newtask: string,) {
    debugger
    if (newtask) {
      this.tasks.push(newtask);
      
      for (let j = 0; j < 1; j++) {
        this.value.push(false)
      }
    }

    
  }

  done(i: any) {
    debugger
    if (this.tasks[i].toString().includes("<s>")) {
      this.tasks[i] = this.tasks[i].replace("<s>", '').replace("</s>", '')
      this.value[i] = false
    } else {
      this.tasks[i] = "<s>" + this.tasks[i] + "</s>"
      this.value[i] = true

    }


  }

  delete(i: any) {
    delete this.tasks[i];

  }

}
