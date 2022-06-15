import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() { }

  public buttons = [
    {
      type: 'text',
      text: 'Education',
    },
    {
      type: 'text',
      text: 'Experience',
    },
    {
      type: 'text',
      text: 'Skills',
    },
    {
      type: 'text',
      text: 'Achievements',
    },
    {
      type: 'text',
      text: 'Languages',
    },
  ];

  public info = [
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
