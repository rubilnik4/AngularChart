import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data-service/data-service';
import { Project } from '../../models/project';

@Component({
  selector: 'BarChart',
  templateUrl: './bar-chart.component.html',
  providers: [DataService]
})


export class BarChartComponent implements OnInit {


  constructor(private dataService: DataService, private httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    
  }


}

