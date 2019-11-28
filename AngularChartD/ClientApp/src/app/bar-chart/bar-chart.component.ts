import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data-service/data-service';
import { Project } from '../../models/project';
import { DateConverter } from '../../converters/date-converter';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'BarChart',
  templateUrl: './bar-chart.component.html',
  providers: [DataService]
})


export class BarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = Array<any>();
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  projects: Project[];

  constructor(private dataService: DataService, private httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadProjects();   
  }

  //получаем данные через сервис
  loadProjects() {
    this.dataService.getProjects()
      .subscribe((data: Project[]) => {
        this.projects = data;
        this.convertProjectsToChartParameters();
     
      });
  }

  convertProjectsToChartParameters() {   
    var dateMonthAndYear = this.projects.map(p => DateConverter.dateToMonthAndYear(DateConverter.dateParse(p.date)));
    this.barChartLabels = dateMonthAndYear;
  }


}

