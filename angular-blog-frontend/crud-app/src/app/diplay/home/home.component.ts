import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Imagedata: any
  @ViewChild("textElement")
  textElement!: ElementRef;
  @ViewChild("blinkElement")
  blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    "Multiple Technology blogs",
    "Awesome Science facts",
    "Contents, you get addicted"
  ];
  @Input() textColor = "white";
  @Input() fontSize = "25px";
  @Input() blinkWidth = "5px";
  @Input() typingSpeedMilliseconds = 100;
  @Input() deleteSpeedMilliseconds = 50;

  private i = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }

  private initVariables(): void {
    this.renderer.setStyle(this.textElement.nativeElement, "font-size", this.fontSize);
    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");
    this.renderer.setStyle(this.textElement.nativeElement, "color", this.textColor);
    this.renderer.setStyle(this.blinkElement.nativeElement, "font-size", this.fontSize);
    this.renderer.setStyle(this.blinkElement.nativeElement, "border-right-width", this.blinkWidth);
    this.renderer.setStyle(this.blinkElement.nativeElement, "border-right-color", "blue");
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = (): boolean | void => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        this.i = this.wordArray.length > this.i + 1 ? ++this.i : 0;
        this.typingEffect();
        return false;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
    };
    loopDeleting();

  }

}






