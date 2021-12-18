import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public typeString: string[] = [
    'Welcome to the Clean Black project.',
    'This project is experimental and is only there to show my skills.',
    `This project is experimental so don't expect too much.`,
    'At the top right you can see me, ... yeah thats me.',
    `On 'More' I show you my skills and my experiences.`,
    `On 'Contact' you can fill out a contact form if you are interested. 😊   `,
    `And this is a 🐧, say hi...`,
  ];

  constructor(@Inject(DOCUMENT) private _document: any) {}

  ngOnInit(): void {
    this._document.body.classList.add('gradient-bg');
  }

  ngOnDestroy(): void {
    this._document.body.classList.add('gradient-bg');
  }
}
