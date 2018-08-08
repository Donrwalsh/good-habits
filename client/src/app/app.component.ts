import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get('http://localhost:8080/hello-world').subscribe(data => this.title = data['message']);
  }
}
