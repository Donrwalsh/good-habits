import {Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Base } from './base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Base implements OnInit {

  constructor(private http: HttpClient) {
    super();
  }

  title = '';
  env = this.ENV_NAME;

  ngOnInit(): void {
    this.http.get('/api/hello-world').subscribe(data => this.title = data['message']);
  }
}
