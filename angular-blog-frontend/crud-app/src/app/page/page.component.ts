import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private voices: SpeechSynthesisVoice[] = [];

  apidata: any
  fulldate: any
  i: any
  id: any;
  comments: any = []
  val: boolean = true
  startOver: boolean = true
  google: any;
  transval: any;
  constructor(private ApiService: ApiService, private route: ActivatedRoute, private apiservice: ApiService) { }

  ngOnInit(): void {
    this.fulldate = JSON.stringify(new Date().getDate()) + "/" + JSON.stringify(new Date().getMonth()) + "/" + JSON.stringify(new Date().getFullYear())

    this.id = this.route.snapshot.params['id']
    console.log(this.id)

    this.ApiService.getdatabyid(this.id).subscribe(data => {
      this.apidata = data

      if (this.apidata) {
        this.val = false
      }
    }, (error) => {
      console.log("An error accessing Service");
    })


  }

  relatedpost() {
    this.ApiService.getdata().subscribe((data) => {
      this.apidata = data;
      if (this.apidata) {
        this.val = false
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

  //getting blog data
  GetContainerText(_container: HTMLElement) {
    let _containerText = _container.innerText;
    return _containerText
  }

  // loads the property values  and creates a SpeechSynthesisUtternce request
  makeRequest(_element: HTMLElement) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = this.GetContainerText(_element) || '';
    const voice = this.findVoice("en" || '');
    if (voice) {
      speech.voice = voice[0];
    }

    return speech;
  }

  //find voice by voice name
  private findVoice(voiceName: string): SpeechSynthesisVoice[] {
    var myWindow = window;
    if (this.voices.length == 0)
      this.voices = myWindow.speechSynthesis.getVoices();
    var voices = this.voices.filter(voices => { return voices.lang.includes(voiceName) });
    return voices;
  }

  //ends and speaks the text again
  toggle(_element: HTMLElement): void {
    this.startOver = !this.startOver
    const speech = this.makeRequest(_element);
    speechSynthesis.cancel();
    if (this.startOver == true && speech.voice != null) {
      speechSynthesis.speak(speech);
    }
  }

  //blog content to pdf
  async exportPDF(divElement: any, img: any) {
    debugger
    var html = htmlToPdfmake((divElement.innerHTML));
    var logo = htmlToPdfmake('<h1 style:>AkashApp</h1>');
    var imgSrc = img.currentSrc
    var imgSrc2 = await this.getBase64ImageFromURL
    (
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
    );

    var documentDefinition = {
      content: [
        logo,
        {
          image: imgSrc,
          width: 500,
          height: 200,
        },
        html]
    };
    pdfMake.createPdf(documentDefinition).download();

  }

  getBase64ImageFromURL(url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d")
        if (ctx != null) {
          ctx.drawImage(img, 0, 0);
        }
        var dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
  }

}
