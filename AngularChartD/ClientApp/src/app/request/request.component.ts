import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'request',
  templateUrl: './request.component.html'
})
export class RequestComponent {

  constructor(private router: Router, private http: HttpClient) { }

}

