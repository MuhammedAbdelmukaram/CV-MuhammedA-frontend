import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor() { }


  public info = [
    {
      type: 'text',
      text: 'Olimpijska 26',
    },
    {
      type: 'text',
      text: '+387/60-356-1699',
    },
    {
      type: 'text',
      text: 'fridgeproduction@gmail.com',
    },
    {
      type: 'text',
      text: 'linkedin.com/in/muhammedabdelmuka',
    },
    {
      type: 'text',
      text: 'twitter.com/muhammedabdelmukaram',
    },
  ];



}
