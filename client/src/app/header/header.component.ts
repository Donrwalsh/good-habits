import { Component, OnInit } from '@angular/core';
import { Base } from '../base';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends Base implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
