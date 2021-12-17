import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private _document: any) {}

  ngOnInit(): void {
    this._document.body.classList.add('gradient-bg');

    //let typeWirter = new Typewriter();
  }

  ngOnDestroy(): void {
    this._document.body.classList.add('gradient-bg');
  }
}
