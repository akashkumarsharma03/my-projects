import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {

  chatform = this.formBuilder.group({
    usermsg: '',
  });

  chatInput: any
  chat: any;
  msg:any
  constructor( private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    debugger
    this.msg= this.chatform.value
    console.log(this.msg.usermsg)
  }
}
