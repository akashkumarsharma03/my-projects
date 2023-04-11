import { Component, OnInit } from '@angular/core';
import { UploadService } from "../upload.service";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {
  file:  File | any = null;

  chatform = this.formBuilder.group({
    usermsg: '',
  });

  chatInput: any
  chat: any;
  msg: any
  constructor(private formBuilder: FormBuilder, private uploadService: UploadService

  ) { }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    debugger
    event.preventDefault();
    this.msg = this.chatform.value.usermsg + " File uploaded: " + this.file.name ;
  }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  upload() {
    if (this.file) {
      // this.uploadService.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      // })
    } else {
      alert("Please select a file first")
    }
  }
}

