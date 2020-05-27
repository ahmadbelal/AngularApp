import { Component, OnInit, Output } from '@angular/core';

import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() taggleSideBarDashboard: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}
  toggleSidebar(){
    this.taggleSideBarDashboard.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );


   }, 300);

  }

}
